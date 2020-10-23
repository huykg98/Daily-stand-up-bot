package com.intern.spring.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.intern.spring.model.QuestionsTemplate;

public class QuestionTemplateMapper implements RowMapper<QuestionsTemplate> {

	@Override
	public QuestionsTemplate mapRow(ResultSet rs, int rowNum) throws SQLException {
		QuestionsTemplate ques = new QuestionsTemplate();
		ques.setId(rs.getInt("template_id"));
		ques.setName(rs.getString("question_template_name"));
		ques.setDescription(rs.getString("description"));
		return ques;
	}

}
