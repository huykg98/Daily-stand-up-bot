/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pms.jdbc.orm.Key;
import java.util.Date;
import java.util.List;

/**
 *
 * @author Negan.Intern
 */
public class ListDailyStandupDTO {
    @Key(value = "dialog_id")
    int id;
    
    @Key(value = "title")
    String dailyTemplateName;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "date_created")
    Date dateCreated;
    
    @Key(value = "question_template_name")
    String questionsTemplateName;
    
    @Key(value = "period")
    String period;
    
    @Key(value = "state")
    String state;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDailyTemplateName() {
        return dailyTemplateName;
    }

    public void setDailyTemplateName(String dailyTemplateName) {
        this.dailyTemplateName = dailyTemplateName;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
    
    public String getQuestionsTemplateName() {
        return questionsTemplateName;
    }

    public void setQuestionsTemplateName(String questionsTemplateName) {
        this.questionsTemplateName = questionsTemplateName;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
    
    
}
