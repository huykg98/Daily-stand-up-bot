/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.rowmapper;
import com.intern.spring.model.Question;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
/**
 *
 * @author Negan.Intern
 */
public class QuestionMapper implements RowMapper<Question>{
     @Override
    public Question mapRow(ResultSet rs, int i) throws SQLException {
        Question question = new Question();
        question.setQuestionTitle(rs.getString("label"));
        return question;
    }
}
