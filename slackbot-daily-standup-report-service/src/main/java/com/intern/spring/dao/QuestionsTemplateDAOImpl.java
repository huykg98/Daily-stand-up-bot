/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import java.util.Collections;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.intern.spring.model.DialogFormDetail;
import com.intern.spring.model.QuestionsTemplate;
import com.pms.jdbc.orm.RowMapperUtils;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;


/**
 *
 * @author Negan.Intern
 */
@Repository
public class QuestionsTemplateDAOImpl implements QuestionsTemplateDAO{

	private JdbcTemplate jdbcTemplate;
        
        private static final Logger logger = Logger.getLogger(QuestionsTemplateDAOImpl.class.getName());
        
        @Autowired
	public void setDataSource(DataSource dataSource) {
		this.jdbcTemplate=new JdbcTemplate(dataSource);
	}
        
	@Override
	public List<QuestionsTemplate> getQuestionTemplatesList() {
		String upSlackbotGetQuestionTemplate="Call up_slackbot_getQuestionTemplate";
                String upSlackbotGetDialogDetailByTemplateId="Call up_slackbot_getDialogDetail";
		List<QuestionsTemplate> question = jdbcTemplate.query(upSlackbotGetQuestionTemplate, RowMapperUtils.getRowMapper(QuestionsTemplate.class));
                if(question.isEmpty()) {
			return Collections.EMPTY_LIST;
		}
                List<DialogFormDetail> dialogList =  jdbcTemplate.query(upSlackbotGetDialogDetailByTemplateId, RowMapperUtils.getRowMapper(DialogFormDetail.class));
                question.stream().forEach(item->{
                    List<DialogFormDetail> dialogFilter = dialogList.stream().filter(i->i.getTemplateId() == item.getId()).collect(Collectors.toList());
                    if (dialogFilter != null && dialogFilter.size()>0){
                        item.setQuestions(dialogFilter);
                    }
                });
		return question;
	}
	@Override
	public QuestionsTemplate getQuestionTemplateById(int id) {
		String upSlackbotGetDialogDetailByTemplateId = "Call up_slackbot_getDialogDetailByTemplateId(?)";
		String upSlackbotGetQuestionTemplateById = "Call up_slackbot_getQuestionTemplateById(?)";
                QuestionsTemplate question;
                question = jdbcTemplate.queryForObject(upSlackbotGetQuestionTemplateById, RowMapperUtils.getRowMapper(QuestionsTemplate.class),id);
		List<DialogFormDetail> dialogDetail = jdbcTemplate.query(upSlackbotGetDialogDetailByTemplateId, RowMapperUtils.getRowMapper(DialogFormDetail.class),id);
		question.setQuestions(dialogDetail);
		return question;          
	} 

        @Override
        public int insertQuestionTemplate(QuestionsTemplate questionTemplate) {
            String upSlackbotAddQuestionTemplate = "Call up_slackbot_addQuestionTemplate(?,?)";
            String upSlackbotAddDialogFormDetail = "Call up_slackbot_addDialogFormDetail(?,?,?,?,?,?,?,?,?,?,?)";
  
            int templateId = jdbcTemplate.queryForObject(upSlackbotAddQuestionTemplate, Integer.class, questionTemplate.getName(),questionTemplate.getDescription());
            if(templateId > 0){                  
                int[] arrayResult = jdbcTemplate.batchUpdate(upSlackbotAddDialogFormDetail, new BatchPreparedStatementSetter(){
                    @Override
                    public void setValues(PreparedStatement ps, int i) throws SQLException {
                       DialogFormDetail list = questionTemplate.getQuestions().get(i);
     
                       ps.setInt(1, templateId);
                       ps.setString(2, list.getName());
                       ps.setString(3, list.getLabel());
                       ps.setString(4, list.getType());
                       ps.setString(5, list.getSubType());
                       ps.setString(6, list.getPlaceHolder());
                       ps.setInt(7, list.getOptional());
                       ps.setInt(8, list.getMaxLength());
                       ps.setInt(9, list.getMinLength());
                       ps.setString(10, list.getHint());
                       ps.setString(11, list.getValue());        
                    }
                    @Override
                    public int getBatchSize() {
                       return questionTemplate.getQuestions().size();
                    }
                });
            }
            return templateId;
        }

        @Override
        public int deleteQuestionTemplateById(int id) {
            int delQ=0;
            String upSlackbotDeleteTemplateQuestionById = "Call up_slackbot_deleteTemplateQuestionById(?)";
            String upSlackbotDeleteDialogFormDetailByTemplateId = "Call up_slackbot_deleteDialogFormDetail_ByTemplateId(?)";
            int delD = jdbcTemplate.update(upSlackbotDeleteDialogFormDetailByTemplateId,id);
//            if(delD != 0){
                delQ = jdbcTemplate.update(upSlackbotDeleteTemplateQuestionById, id);
//            }
            return delQ;
        }

        @Override
        public int updateQuestionTemplateById(QuestionsTemplate questionTemplate) {
            String upSlackbotUpdateQuestionTemplate = "Call up_slackbot_updateQuestionTemplate(?,?,?)";
            String upSlackbotUpdateDialogFormDetailByTemplateId = "Call up_slackbot_updateDialogFormDetail_ByTemplateId(?,?,?,?,?,?,?,?,?,?,?,?)";
            int templateId = questionTemplate.getId();
            String name = questionTemplate.getName();
            String description = questionTemplate.getDescription();
            int updateQ = jdbcTemplate.update(upSlackbotUpdateQuestionTemplate, templateId, name, description);
            int[] arrayResult = jdbcTemplate.batchUpdate(upSlackbotUpdateDialogFormDetailByTemplateId, new BatchPreparedStatementSetter(){
                @Override
                public void setValues(PreparedStatement ps, int i) throws SQLException {
                    DialogFormDetail dialog = questionTemplate.getQuestions().get(i);
                    ps.setInt(1, dialog.getDetaild());
                    ps.setInt(2, templateId);
                    ps.setString(3, dialog.getName());
                    ps.setString(4, dialog.getLabel());
                    ps.setString(5, dialog.getType());
                    ps.setString(6, dialog.getSubType());
                    ps.setString(7, dialog.getPlaceHolder());
                    ps.setInt(8, dialog.getOptional());
                    ps.setInt(9, dialog.getMaxLength());
                    ps.setInt(10, dialog.getMinLength());
                    ps.setString(11, dialog.getHint());
                    ps.setString(12, dialog.getValue());
                    
                }

                @Override
                public int getBatchSize() {
                    return questionTemplate.getQuestions().size();
                }
                
            });
           return updateQ;
        }
        

 
    
}
