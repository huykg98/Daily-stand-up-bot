/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pms.jdbc.orm.Key;
import java.io.Serializable;
import java.util.Date;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Driger.Intern
 */
public class DialogFormDetail implements Serializable{
    
    @Key(value="detail_id")
    private int detaild;
    @Key(value="template_id")
    private int templateId;
    @Key(value="name")
    private String name;
    @Key(value="label")
    private String label;
    @Key(value="type")
    private String type;
    @Key(value="subtype")
    private String subType;
    @Key(value="placeholder")
    private String placeHolder;
    @Key(value="optional")
    private int optional;
    @Key(value="max_length")
    private int maxLength;
    @Key(value="min_length")
    private int minLength;
    @Key(value="hint")
    private String hint;
    @Key(value="value")
    private String value;
  
    
    public DialogFormDetail() {
    	
    }
    
	public DialogFormDetail(int detaild, int templateId, String name, String label, String type,
			String subType, String placeHolder, int optional, int maxLength, int minLength, String hint, String value) {
		this.detaild = detaild;
		this.templateId = templateId;
		this.name = name;
		this.label = label;
		this.type = type;
		this.subType = subType;
		this.placeHolder = placeHolder;
		this.optional = optional;
		this.maxLength = maxLength;
		this.minLength = minLength;
		this.hint = hint;
		this.value = value;
	}
	public int getDetaild() {
		return detaild;
	}
	public void setDetaild(int detaild) {
		this.detaild = detaild;
	}

        public int getTemplateId() {
            return templateId;
        }

        public void setTemplateId(int templateId) {
            this.templateId = templateId;
        }
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSubType() {
		return subType;
	}
	public void setSubType(String subType) {
		this.subType = subType;
	}
	public String getPlaceHolder() {
		return placeHolder;
	}
	public void setPlaceHolder(String placeHolder) {
		this.placeHolder = placeHolder;
	}
	public int getOptional() {
		return optional;
	}
	public void setOptional(int optional) {
		this.optional = optional;
	}
	public int getMaxLength() {
		return maxLength;
	}
	public void setMaxLength(int maxLength) {
		this.maxLength = maxLength;
	}
	public int getMinLength() {
		return minLength;
	}
	public void setMinLength(int minLength) {
		this.minLength = minLength;
	}
	public String getHint() {
		return hint;
	}
	public void setHint(String hint) {
		this.hint = hint;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	 
    
}
