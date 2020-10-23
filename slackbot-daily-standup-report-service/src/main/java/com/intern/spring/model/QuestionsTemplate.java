/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pms.jdbc.orm.Key;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Negan.Intern
 */
public class QuestionsTemplate implements Serializable {
        private static final long serialVersionUID = 1L;
        @Key(value="template_id")
	private int id;
        @Key(value="description")
	private String description;
        @Key(value="question_template_name")
	private String name;
        
        @Key(value = "questions", required = false)
	List<DialogFormDetail> questions;
	
	
	public QuestionsTemplate() {
	}
	
	public QuestionsTemplate(int id, String description, String name, List<DialogFormDetail> questions) {
		this.id = id;
		this.description = description;
		this.name = name;
		this.questions = questions;
	}

	public void setId(int id) {
		this.id = id;
	}
	public int getId() {
		return this.id;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


        public List<DialogFormDetail> getQuestions() {
            return questions;
        }

        public void setQuestions(List<DialogFormDetail> questions) {
            this.questions = questions;
        }
        
        
}
