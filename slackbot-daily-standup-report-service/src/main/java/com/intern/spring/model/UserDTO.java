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
public class UserDTO {
    
    @Key(value = "user_id") 
    private String userId;
    
    @Key(value = "user_name") 
    private String username;

    public UserDTO() {
    }

    public UserDTO(String userId, String username) {
        this.userId = userId;
        this.username = username;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
}
