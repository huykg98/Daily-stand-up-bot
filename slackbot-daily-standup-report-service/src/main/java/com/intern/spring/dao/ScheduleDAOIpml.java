/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.ListDailyStandupDTO;
import com.intern.spring.model.ScheduleDTO;
import com.pms.jdbc.orm.RowMapperUtils;
import java.util.Collections;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Negan.Intern
 */
@Repository
public class ScheduleDAOIpml implements ScheduleDAO {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<ScheduleDTO> getScheduleList() {
        String sql = "Call up_slackbot_getScheduleList";
        List<ScheduleDTO> schedules = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(ScheduleDTO.class));
        if (schedules.isEmpty()) {
            schedules = Collections.EMPTY_LIST;
        }
        return schedules;
    }

}
