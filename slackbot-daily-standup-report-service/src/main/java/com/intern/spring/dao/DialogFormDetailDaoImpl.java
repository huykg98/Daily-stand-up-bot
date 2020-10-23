package com.intern.spring.dao;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.intern.spring.model.DialogFormDetail;
import com.intern.spring.rowmapper.DialogFormDetailMapper;
import com.pms.jdbc.orm.RowMapperUtils;

@Repository
public class DialogFormDetailDaoImpl implements DialogFormDetailDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.jdbcTemplate=new JdbcTemplate(dataSource);
	}
        @Override
	public List<DialogFormDetail> getDialogFormDetailListByDialogByTemplateId(int id) {
		String sql="Call up_slackbot_getDialogDetailByTemplateId(?)";
		List<DialogFormDetail> dialog = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(DialogFormDetail.class),id);
		return dialog;
	}

        @Override
        public DialogFormDetail insertDialogFormDetail(DialogFormDetail dialog) {
            String upSlackbotAddDialogFormDetail = "Call up_slackbot_addDialogFormDetail";
            DialogFormDetail detail = new DialogFormDetail();
            detail.setDetaild(dialog.getDetaild());
            detail.setTemplateId(dialog.getTemplateId());
            detail.setName(dialog.getName());
            detail.setLabel(dialog.getLabel());
            detail.setType(dialog.getType());
            detail.setSubType(dialog.getSubType());
            detail.setPlaceHolder(dialog.getPlaceHolder());
            detail.setOptional(dialog.getOptional());
            detail.setMaxLength(dialog.getMaxLength());
            detail.setMinLength(dialog.getMinLength());
            detail.setHint(dialog.getHint());
            detail.setValue(dialog.getValue());
    
            detail = jdbcTemplate.queryForObject(upSlackbotAddDialogFormDetail, RowMapperUtils.getRowMapper(DialogFormDetail.class),
                                                 detail.getDetaild(),detail.getTemplateId(),detail.getName(),detail.getLabel(),
                                                 detail.getType(),detail.getSubType(),detail.getPlaceHolder(),detail.getOptional(),
                                                 detail.getMaxLength(),detail.getMinLength(),detail.getHint(),detail.getValue());
            return detail;
        }

        @Override
        public DialogFormDetail updateDialogFormDetail(DialogFormDetail dialog) {
            String upSlackbotUpdateDialogFormDetailByTemplateId = "Call up_slackbot_updateDialogFormDetail_ByTemplateId(?,?,?,?,?,?,?,?,?,?,?,?)";
            int templateId = dialog.getTemplateId();
            String name = dialog.getName();
            String label = dialog.getLabel();
            String type = dialog.getType();
            String subType = dialog.getSubType();
            String placeholder = dialog.getPlaceHolder();
            int optional = dialog.getOptional();
            int maxLength = dialog.getMaxLength();
            int minLength = dialog.getMinLength();
            String hint = dialog.getHint();
            String value = dialog.getValue();
            
            DialogFormDetail detail = jdbcTemplate.queryForObject(upSlackbotUpdateDialogFormDetailByTemplateId,RowMapperUtils.getRowMapper(DialogFormDetail.class), templateId, name, label, type,
                                                                   subType, placeholder, optional, maxLength, minLength, hint, value);
            return dialog;
        }

        @Override
        public int deleteDialogFormDetailByTemplateId(int TemplateId) {
            String upSlackbotDeleteDialogFormDetailByTemplateId = "Call up_slackbot_deleteDialogFormDetail_ByTemplateId(?)";
            int del = jdbcTemplate.update(upSlackbotDeleteDialogFormDetailByTemplateId, TemplateId);
            return del;
        }

        @Override
        public int deleteDialogFormDetailByDetailId(int DetailId) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

    
   

}
