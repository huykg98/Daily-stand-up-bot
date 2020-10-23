/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import java.util.List;

/**
 *
 * @author Celeste.Intern
 */
public class ReportObject {
    private String label;
    
    private List<UserReportView> reports;

    public ReportObject() {
    }

    public ReportObject(String label, List<UserReportView> reports) {
        this.label = label;
        this.reports = reports;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<UserReportView> getReports() {
        return reports;
    }

    public void setReports(List<UserReportView> reports) {
        this.reports = reports;
    }
    
    
}
