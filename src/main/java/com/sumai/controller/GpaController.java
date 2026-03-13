package com.sumai.controller;

import com.sumai.model.StudentYear;
import com.sumai.service.GPAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class GpaController {

    @Autowired
    private GPAService gpaService;

    @PostMapping("/calculate")
    public ResponseEntity<Map<String,Object>> calculateGpa(@RequestBody StudentYear studentYear){
        Map<String,Object> result = gpaService.calculate(studentYear);
        return ResponseEntity.ok(result);
    }
}
