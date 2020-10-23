/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.pms.jdbc.orm.Key;

/**
 *
 * @author Negan.Intern
 */
public class Question {

    @Key(value = "label")
    private String questionTitle;

    public Question() {
    }

    public Question(String questionTitle) {
        this.questionTitle = questionTitle;
    }
    
    public String getQuestionTitle() {
        return questionTitle;
    }

    public void setQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
    }

   
}
