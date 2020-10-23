/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

/**
 *
 * @author Negan.Intern
 */
public class Reminder {
    int id;
    int channelID;
    String remindTime;
    String period;
    String dayOfWeek;
    String dateRemind;
    String timeZone;
    String remind_message;

    public Reminder() {
    }

    public Reminder(int id, int channelID, String remindTime, String period, String dayOfWeek, String remind_message) {
        this.id = id;
        this.channelID = channelID;
        this.remindTime = remindTime;
        this.period = period;
        this.dayOfWeek = dayOfWeek;
        this.remind_message = remind_message;
    }

    public Reminder(int id, int channelID, String remindTime, String period, String dayOfWeek, String dateRemind, String timeZone, String remind_message) {
        this.id = id;
        this.channelID = channelID;
        this.remindTime = remindTime;
        this.period = period;
        this.dayOfWeek = dayOfWeek;
        this.dateRemind = dateRemind;
        this.timeZone = timeZone;
        this.remind_message = remind_message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getChannelID() {
        return channelID;
    }

    public void setChannelID(int channelID) {
        this.channelID = channelID;
    }

    public String getRemindTime() {
        return remindTime;
    }

    public void setRemindTime(String remindTime) {
        this.remindTime = remindTime;
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

    public String getDateRemind() {
        return dateRemind;
    }

    public void setDateRemind(String dateRemind) {
        this.dateRemind = dateRemind;
    }

    public String getTimeZone() {
        return timeZone;
    }

    public void setTimeZone(String timeZone) {
        this.timeZone = timeZone;
    }

    public String getRemind_message() {
        return remind_message;
    }

    public void setRemind_message(String remind_message) {
        this.remind_message = remind_message;
    }
    
}
