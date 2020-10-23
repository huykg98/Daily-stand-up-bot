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
import com.pms.jdbc.orm.Key;

/**
 *
 * @author Negan.Intern
 */
public class DailyStandupReportSettings {
    @Key(value = "dialog_id")
    int id;
    
    @Key(value = "title")
    String dailyTemplateName;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "GMT-4")
    @Key(value = "date_created")
    Date dateCreated;
    
    @Key(value = "question_template_name")
    String questionsTemplateName;

//    @Key(value = "template_id")
//    String questionsTemplateId;
    
    @Key(value = "period")
    String period;
    
    @Key(value = "day_of_week", required = false)
    String dayOfWeek;
    
    @Key(value = "state", required = false)
    String state;
    
    //String questionTitle;
    
    @Key(value = "remind_time", required = false)
    String remindTime;
    @Key(value = "remind_message", required = false)
    String remindMessage;

    List<Channel> channelList;
    List<Question> questionList;

//    public String getQuestionsTemplateID() {
//        return questionsTemplateId;
//    }
//
//    public void setQuestionsTemplateID(String questionsTemplateID) {
//        this.questionsTemplateId = questionsTemplateID;
//    }

    public String getRemindTime() {
        return remindTime;
    }

    public void setRemindTime(String remindTime) {
        this.remindTime = remindTime;
    }

    public String getRemindMessage() {
        return remindMessage;
    }

    public void setRemindMessage(String remindMessage) {
        this.remindMessage = remindMessage;
    }

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

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public List<Channel> getChannelList() {
        return channelList;
    }

    public void setChannelList(List<Channel> channelList) {
        this.channelList = channelList;
    }

    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

   
}
