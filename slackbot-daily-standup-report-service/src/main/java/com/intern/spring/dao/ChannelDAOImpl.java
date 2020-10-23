/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.Channel;
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
public class ChannelDAOImpl implements ChannelDAO{
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    
    @Override
    public List<Channel> getAllChannel(){
        String sql = "call up_slackbot_getAllChannel";
        List<Channel> listChannel = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(Channel.class));
        if (listChannel.isEmpty()) {
            listChannel = Collections.EMPTY_LIST;
        }
        return listChannel;
    }
}
