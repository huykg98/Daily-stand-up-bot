/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author Celeste.Intern
 */
public class UserReportDetailDTO {
    
    @Key(value = "report_content_detail_id") 
    private int reportDetailId;
    
    @Key(value = "report_content_id") 
    private String reportId;
    
    @Key(value = "label") 
    private String label;
    
    @Key(value = "value") 
    private String value;

    public UserReportDetailDTO() {
    }

    public UserReportDetailDTO(int reportDetailId, String reportId, String label, String value) {
        this.reportDetailId = reportDetailId;
        this.reportId = reportId;
        this.label = label;
        this.value = value;
    }

    public int getReportDetailId() {
        return reportDetailId;
    }

    public void setReportDetailId(int reportDetailId) {
        this.reportDetailId = reportDetailId;
    }

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
    
    
}
