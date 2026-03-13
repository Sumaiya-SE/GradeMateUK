# GradeMateUK 🎓

**GradeMateUK** is a web-based Degree Grade & Class Calculator that demonstrates a **full-stack Spring Boot application**.  
It allows students to input module name, component marks and weightages, calculates semester and year GPA, and outputs the corresponding **UK degree classification** with personalized messages.  

This project is designed to showcase **Spring Boot skills**, including REST API development, service-layer architecture, and handling JSON data, while providing a **modern, minimal pastel-themed frontend**.

---

## 🌟 Features

- **Spring Boot Backend**
  - REST API endpoints for GPA calculation and UK degree classification.
  - Service-layer architecture for modular logic.
- **Frontend**
  - Users enter their name for personalized greetings.
  - Input any number of modules per year with marks and weightages.
  - Dynamic calculation of average marks, GPA, and UK degree class.
  - Colorful, encouraging messages based on performance.
- **UI Design**
  - Minimal pastel theme with padded, rounded inputs.
  - Responsive layout for desktop and tablet screens.

---

## 🛠 Tech Stack

| Layer         | Technology                 |
|---------------|---------------------------|
| Backend       | Java, Spring Boot          |
| REST API      | Spring Web                 |
| Frontend      | HTML, CSS, JavaScript      |
| Build Tool    | Maven                      |
| Version Control | Git, GitHub              |

---

## ⚙️ How It Works

1. **User Input:** Frontend captures student info, module names, marks, and weightages.  
2. **API Request:** Sends a JSON payload to Spring Boot endpoint `/api/calculate`.  
3. **Backend Processing:**
   - Calculates weighted average marks.
   - Converts marks to GPA (4.0 scale).
   - Determines UK degree class using standard percentages.
   - Generates personalized message.
4. **Frontend Display:** Receives JSON response and displays results dynamically with colorful messages.

---

## 🎯 UK Grading System

| Classification           | Marks (%) |
|--------------------------|-----------|
| First Class              | 70+       |
| Upper Second (2:1)       | 60–69     |
| Lower Second (2:2)       | 50–59     |
| Third Class              | 40–49     |
| Fail                     | <40       |

---

## 📂 Project Structure

```
gpa-calculator/
│
├─ pom.xml
├─ src/main/java/com/example/gpacalc/
│   ├─ GpaCalculatorApplication.java       
│   ├─ controller/GpaController.java       
│   ├─ service/GpaService.java             
│   └─ model/
│        ├─ Module.java                    
│        └─ StudentYear.java               
├─ src/main/resources/static/
│   ├─ index.html                          
│   ├─ modules.html                        
│   ├─ style.css                            
│   └─ script.js                             
└─ .gitignore
````

---

## 🚀 Running the Project

1. **Clone the repository**

```bash
git clone https://github.com/Sumaiya-SE/GradeMateUK.git
cd GradeMateUK
```

2. **Run Spring Boot Backend**

```bash
mvn clean install
mvn spring-boot:run
```

3. **Open Frontend**

* Open `src/main/resources/static/index.html` in a browser.

---

## 👩‍💻 Author

**Sumaiya Shahudheen** – Second-year Software Engineering Undergraduate, University Of Westminster, Uk (IIT Campus, Sri Lanka)

