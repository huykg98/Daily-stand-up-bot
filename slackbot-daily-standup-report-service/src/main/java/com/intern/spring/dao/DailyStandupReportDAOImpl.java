/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.Channel;
import com.intern.spring.model.DailyStandupReportSettings;
import com.intern.spring.model.ListDailyStandupDTO;
import com.intern.spring.model.Question;
import com.pms.jdbc.orm.RowMapperUtils;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;

/**
 *
 * @author Negan.Intern
 */
@Repository
public class DailyStandupReportDAOImpl implements DailyStandupReportDAO {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<ListDailyStandupDTO> getDailyStandupList() {
        String sql = "Call up_slackbot_getDailyStandupList_V1_0";
        List<ListDailyStandupDTO> reports = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(ListDailyStandupDTO.class));
        if (reports.isEmpty()) {
            reports = Collections.EMPTY_LIST;
        }
        return reports;
    }

    @Override
    public DailyStandupReportSettings getDailyStandupDetailByStandupId(int id) {
        String upSlackbotGetDailyStandupById = "Call  up_slackbot_getDailyStandupAndScheduleByDialogId(?)";
        String upSlackbotGetListQuestionById = "Call  up_slackbot_getListQuestionByDialogId(?)";
        String upSlackbotGetListChannelById = "Call  up_slackbot_getListChannelByDialogId(?)";
        DailyStandupReportSettings report;
        report = jdbcTemplate.queryForObject(upSlackbotGetDailyStandupById, RowMapperUtils.getRowMapper(DailyStandupReportSettings.class), id);

        List<Question> listQuestion = jdbcTemplate.query(upSlackbotGetListQuestionById, RowMapperUtils.getRowMapper(Question.class), id);
        report.setQuestionList(listQuestion);

        List<Channel> listChannel = jdbcTemplate.query(upSlackbotGetListChannelById, RowMapperUtils.getRowMapper(Channel.class), id);
        report.setChannelList(listChannel);
        return report;

    }

    @Override
    public int insertDailyStandup(DailyStandupReportSettings dailyStandupReportSettings) {
            String upSlackbotInsertDailyStandup = "Call up_slackbot_insert_daily_standup_V1_0(?, ?, ?, ?, ?, ?)";
            String upSlackbotUpdateChannelByChannelID= "Call up_slackbot_updateChannelByChannelID(?,?)";
  
            int dailyStandupId = jdbcTemplate.queryForObject(upSlackbotInsertDailyStandup, Integer.class,
                    dailyStandupReportSettings.getDailyTemplateName(), dailyStandupReportSettings.getQuestionsTemplateName(), dailyStandupReportSettings.getRemindTime(),dailyStandupReportSettings.getPeriod(),
                    dailyStandupReportSettings.getDayOfWeek(),  dailyStandupReportSettings.getRemindMessage());
            if(dailyStandupId > 0){                  
                int[] arrayResult = jdbcTemplate.batchUpdate(upSlackbotUpdateChannelByChannelID, new BatchPreparedStatementSetter(){
                    @Override
                    public void setValues(PreparedStatement ps, int i) throws SQLException {
                       Channel channelList = dailyStandupReportSettings.getChannelList().get(i);
                       ps.setString(1, channelList.getId());
                       ps.setInt(2, dailyStandupId);    
                    }
                    @Override
                    public int getBatchSize() {
                       return dailyStandupReportSettings.getChannelList().size();
                    }
                });
            }
            return dailyStandupId;    
    }

    @Override
    public int deleteDailyStandupById(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public int updateDailyStandupById(DailyStandupReportSettings dailyStandupReportSettings) {
            String upSlackbotUpdateDailyStandup = "Call up_slackbot_update_daily_standup_byId_V1_0(?, ?, ?, ?, ?, ?, ?)";
            String upSlackbotUpdateChannelByChannelID= "Call up_slackbot_updateChannelByChannelID(?,?)";
  
            int dailyStandupId = jdbcTemplate.queryForObject(upSlackbotUpdateDailyStandup, Integer.class,
                    dailyStandupReportSettings.getId(),dailyStandupReportSettings.getDailyTemplateName(), dailyStandupReportSettings.getQuestionsTemplateName(), dailyStandupReportSettings.getRemindTime(),dailyStandupReportSettings.getPeriod(),
                    dailyStandupReportSettings.getDayOfWeek(),  dailyStandupReportSettings.getRemindMessage());
            if(dailyStandupId > 0){                  
                int[] arrayResult = jdbcTemplate.batchUpdate(upSlackbotUpdateChannelByChannelID, new BatchPreparedStatementSetter(){
                    @Override
                    public void setValues(PreparedStatement ps, int i) throws SQLException {
                       Channel channelList = dailyStandupReportSettings.getChannelList().get(i);
                       ps.setString(1, channelList.getId());
                       ps.setInt(2, dailyStandupId);    
                    }
                    @Override
                    public int getBatchSize() {
                       return dailyStandupReportSettings.getChannelList().size();
                    }
                });
            }
            return dailyStandupId;    
    }

    @Override
    public String changeDailyStandupStatus(int id, String state) {
        String upSlackbotUpdateStatusDailyStandup="Call up_slackbot_updateStatusDailyStandup(?,?)"; 
        jdbcTemplate.update(upSlackbotUpdateStatusDailyStandup, id,state);
        return state;
    }


}
