/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.Blocker;
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
public class BlockerDAOImpl implements BlockerDAO{
    
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    
    @Override
    public List<Blocker> getBlockerByDate(long date){
        String sql = "call up_slackbot_getReportBlockerByDate(?)";
        List<Blocker> listBlocker = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(Blocker.class), date);
        if (listBlocker.isEmpty()) { 
            listBlocker = Collections.EMPTY_LIST;
        }
        return listBlocker;
    }
}
