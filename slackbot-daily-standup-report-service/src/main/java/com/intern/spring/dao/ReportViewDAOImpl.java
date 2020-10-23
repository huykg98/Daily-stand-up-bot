/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.ReportObject;
import com.intern.spring.model.ReportViewDTO;
import com.intern.spring.model.UserReportView;
import com.pms.jdbc.orm.RowMapperUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Celeste.Intern
 */

@Repository
public class ReportViewDAOImpl implements ReportViewDAO{
    
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    
    @Override
    public List<ReportObject> getReportView(long fromDate, long toDate, String username, String channel){
        String sql = "call up_slackbot_report_filter_V1_2(?,?,?,?)";
        List<ReportViewDTO> listReport = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(ReportViewDTO.class),fromDate,toDate,username,channel);
        
        Map<String, List<UserReportView>> map = new HashMap<String, List<UserReportView>>();
        
        for(ReportViewDTO report : listReport){
            UserReportView userReport = new UserReportView();
            userReport.setText(report.getText());
            userReport.setUsername(report.getUsername());
            userReport.setTimestamp(report.getTimestamp());
            userReport.setAvatar(report.getAvatar());
            
            map.computeIfAbsent(report.getReportLabel(), k -> new ArrayList<>()).add(userReport);
        }
        
        List<ReportObject> listReportObject = new ArrayList<>();
        map.forEach((k, v) -> {
            ReportObject ro = new ReportObject();
            ro.setLabel(k);
            ro.setReports(v);
            listReportObject.add(ro);
        });

        return listReportObject;
    }
}
