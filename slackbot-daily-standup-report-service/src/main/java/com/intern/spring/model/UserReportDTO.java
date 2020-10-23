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
public class UserReportDTO {
    
    @Key(value = "report_content_id") 
    private String reportId;
    
    @Key(value = "user_id")
    private String userId;
    
    @Key(value = "channel_id")
    private String channelId;
    
    @Key(value = "timestamp")
    private String timestamp;
    
    @Key(value = "user_name")
    private String username;
    
    @Key(value = "channel_name")
    private String channelName;
    
    //private List<UserReportDetail> listUserReportDetail ;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    
    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

//    public List<UserReportDetail> getListUserReportDetail() {
//        return listUserReportDetail;
//    }
//
//    public void setListUserReportDetail(List<UserReportDetail> listUserReportDetail) {
//        this.listUserReportDetail = listUserReportDetail;
//    }

    
    
    
}
