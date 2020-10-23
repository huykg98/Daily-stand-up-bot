package com.intern.spring.model;

public class DialogForm {
	private int dialogId;
	private String schema;
	private String table;
	private String type;
	private String charaterSet;
	private int displaySize;
	private int precision;
	private int scale;
	public DialogForm() {
	}
	public DialogForm(int dialogId, String schema, String table, String type) {
		this.dialogId = dialogId;
		this.schema = schema;
		this.table = table;
		this.type = type;
	}
	
	public void setDialogId(int dialogId) {
		this.dialogId=dialogId;
	}
	public int getDialogId() {
		return this.dialogId;
	}
	public void setSchema(String schema) {
		this.schema=schema;
	}
	public String getSchema() {
		return this.schema;
	}
	public void setTable(String table) {
		this.table=table;
	}
	public String getTable() {
		return this.table;
	}
	public void setType(String type) {
		this.type=type;
	}
	public String getType() {
		return this.type;
	}
	public void setCharacterSet(String charaterSet) {
		this.charaterSet=charaterSet;
	}
	public String getCharacterSet() {
		return this.charaterSet;
	}
	public void setDisplaySize(int displaySize) {
		this.displaySize=displaySize;
	}
	public int getDisplaySize() {
		return this.displaySize;
	}
	public void setPrecision(int precision) {
		this.precision=precision;
	}
	public int getPrecision() {
		return this.precision;
	}
	public void setScale(int scale) {
		this.scale=scale;
	}
	public int getScale() {
		return this.scale;
	}
}
