/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.pms.jdbc.orm.Key;
import java.util.List;

/**
 *
 * @author Celeste.Intern
 */
public class ReportViewDTO {
    @Key(value = "label") 
    private String reportLabel;
    
    @Key(value = "value") 
    private String text;
    
    @Key(value = "user_name") 
    private String username;
    
    @Key(value = "timestamp") 
    private long timestamp;
    
    @Key(value = "avatar") 
    private String avatar;

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
    
    

    public String getReportLabel() {
        return reportLabel;
    }

    public void setReportLabel(String reportLabel) {
        this.reportLabel = reportLabel;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    
    
    
}
