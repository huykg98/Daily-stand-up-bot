/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.SummaryTotalReportDTO;
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
public class SummaryTotalReportDAOImpl implements SummaryTotalReportDAO{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    @Override
    public SummaryTotalReportDTO getSummaryTotalReport(long date){
        String sql = "call up_slackbot_getNumberOfReports(?)";
        SummaryTotalReportDTO summaryTotalReport = jdbcTemplate.queryForObject(sql, RowMapperUtils.getRowMapper(SummaryTotalReportDTO.class), date);
        return summaryTotalReport;
    }
}
