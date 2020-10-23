package com.intern.spring.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.intern.spring.model.DialogFormDetail;

public class DialogFormDetailMapper implements RowMapper<DialogFormDetail> {

	@Override
	public DialogFormDetail mapRow(ResultSet rs, int rowNum) throws SQLException {
		DialogFormDetail dialog = new DialogFormDetail();
		dialog.setDetaild(rs.getInt("detail_id"));
//		dialog.setTemplateId(rs.getString("template_id"));
//		dialog.setName(rs.getString("name"));
//		dialog.setLabel(rs.getString("label"));
//		dialog.setType(rs.getString("type"));
//		dialog.setSubType(rs.getString("subtype"));
//		dialog.setPlaceHolder(rs.getString("placeholder"));
//		dialog.setOptional(rs.getInt("optional"));
//		dialog.setMaxLength(rs.getInt("max_length"));
//		dialog.setMinLength(rs.getInt("min_length"));
//		dialog.setHint(rs.getString("hint"));
//		dialog.setValue(rs.getString("value"));
		return dialog;
	}

}
