package com.sumai.model;

import java.util.List;

public class StudentYear {
    private int year;
    private List<Module> modules;

    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public List<Module> getModules() { return modules; }
    public void setModules(List<Module> modules) { this.modules = modules; }
}