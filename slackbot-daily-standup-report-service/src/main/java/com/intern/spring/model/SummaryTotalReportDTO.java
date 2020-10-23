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
public class SummaryTotalReportDTO {
    @Key(value = "completed") 
    private String numberOfCompleted;
    
    @Key(value = "total") 
    private String numberOfUsers;

    public String getNumberOfCompleted() {
        return numberOfCompleted;
    }

    public void setNumberOfCompleted(String numberOfCompleted) {
        this.numberOfCompleted = numberOfCompleted;
    }

    public String getNumberOfUsers() {
        return numberOfUsers;
    }

    public void setNumberOfUsers(String numberOfUsers) {
        this.numberOfUsers = numberOfUsers;
    }
}
