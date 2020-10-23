/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.UserReportDTO;
import com.pms.jdbc.orm.RowMapperUtils;
import java.util.Collections;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Celeste.Intern
 */

@Repository
public class UserReportDAOImpl implements UserReportDAO{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    @Override
    public List<UserReportDTO> getAllReport(){
        String sql = "call up_slackbot_getAllUserReport";
        List<UserReportDTO> listReport = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(UserReportDTO.class));
        if (listReport.isEmpty()) {
            listReport = Collections.EMPTY_LIST;
        }
        return listReport;
    }
    
    @Override
    public List<UserReportDTO> getReportFilter(long fromDate, long toDate, String username, String channel){
        String sql = "call up_slackbot_report_filter_V1_0(?,?,?,?)";
        List<UserReportDTO> listReport = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(UserReportDTO.class), fromDate, toDate, username, channel);
        if (listReport.isEmpty()) {
            listReport = Collections.EMPTY_LIST;
        }
        return listReport;
    }
}
