document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username") || "Student";
    document.getElementById("greeting").innerText = `Hello, ${username}! Enter your marks below.`;

    const modulesCount = parseInt(localStorage.getItem("modules")) || 3;
    const container = document.getElementById("formContainer");

    for(let i=1;i<=modulesCount;i++){
        const div = document.createElement("div");
        div.className = "moduleDiv";
        div.innerHTML = `
            <h4>Module ${i}</h4>
            <input type="text" id="modName${i}" placeholder="Module Name"><br>
            <input type="number" id="modMarks${i}" placeholder="Marks (0-100)"><br>
            <input type="number" id="modWeight${i}" placeholder="Weightage (%)"><hr>`;
        container.appendChild(div);
    }
});

function calculateGPA() {
    const modulesCount = parseInt(localStorage.getItem("modules")) || 3;
    const username = localStorage.getItem("username") || "Student";
    const year = parseInt(localStorage.getItem("year")) || 1;

    const modules = [];
    for(let i=1;i<=modulesCount;i++){
        const name = document.getElementById(`modName${i}`).value.trim();
        const marks = parseFloat(document.getElementById(`modMarks${i}`).value);
        const weight = parseFloat(document.getElementById(`modWeight${i}`).value);

        if(!name || isNaN(marks) || isNaN(weight)) {
            alert("Please fill all module fields correctly!");
            return;
        }
        modules.push({name, marks, weight});
    }

    fetch("http://localhost:8080/api/calculate", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({year, modules})
    })
    .then(res=>res.json())
    .then(data=>{
        const ukGrade = getUKGrade(data.averageMark);
        document.getElementById("result").innerHTML = `
            <p class="highlight">Hi ${username}, here’s your result!</p>
            <p>Average Marks: ${data.averageMark.toFixed(2)}%</p>
            <p>GPA (4.0 scale): ${data.gpa.toFixed(2)}</p>
            <p>Degree Class: <strong>${ukGrade.grade}</strong></p>
            <p class="congrats">${ukGrade.message}</p>
        `;
    });
}

// UK Grading logic
function getUKGrade(mark) {
    if(mark >= 70) return {grade:"First Class", message:"🎉 Outstanding! Keep shining!"};
    else if(mark >= 60) return {grade:"Upper Second (2:1)", message:"👏 Excellent! Well done!"};
    else if(mark >= 50) return {grade:"Lower Second (2:2)", message:"👍 Good job! Keep improving!"};
    else if(mark >= 40) return {grade:"Third Class", message:"🙂 You passed! Aim higher next time!"};
    else return {grade:"Fail", message:"💪 You didn’t make it this time, keep learning!"};
}