package com.intern.spring.model;

import java.util.List;

public class DialogTemplateDTO {
	private int id;
	private String description;
	private String name;
	private List<DialogFormDetail> questions;
	
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

	public List<DialogFormDetail> getListDialogDetails() {
		return questions;
	}

	public void setListDialogDetails(List<DialogFormDetail> questions) {
		this.questions = questions;
	}
		 
}
