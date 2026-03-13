package com.sumai.service;

import com.sumai.model.Module;
import com.sumai.model.StudentYear;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class GPAService {

    public Map<String,Object> calculate(StudentYear year) {
        double totalWeighted = 0;
        double totalWeight = 0;

        for (Module m : year.getModules()) {
            double weighted = m.getMarks() * m.getWeight() / 100;
            totalWeighted += weighted;
            totalWeight += m.getWeight();
        }

        double averageMark = totalWeighted / totalWeight * 100;
        double gpa = (averageMark / 100) * 4;

        String degreeClass;
        String message;

        if(gpa >= 3.7){ degreeClass = "Distinction"; message="Outstanding! Keep it up!"; }
        else if(gpa >= 3.3){ degreeClass = "First Class"; message="Excellent work!"; }
        else if(gpa >= 2.7){ degreeClass = "Second Class Upper"; message="Good job! Keep improving!"; }
        else if(gpa >= 2.0){ degreeClass = "Second Class Lower"; message="Fair effort! Focus on the next year!"; }
        else { degreeClass = "Pass"; message="You passed! Keep learning and growing!"; }

        Map<String,Object> map = new HashMap<>();
        map.put("averageMark", averageMark);
        map.put("gpa", gpa);
        map.put("degreeClass", degreeClass);
        map.put("message", message);

        return map;
    }
}