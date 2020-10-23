/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.UserDTO;
import com.intern.spring.rowmapper.UserMapper;
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
public class UserDAOImpl implements UserDAO {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    @Override
    public List<UserDTO> getUserList(){
        String sql = "call up_slackbot_getAllUser";
        List<UserDTO> listUser = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(UserDTO.class));
        if (listUser.isEmpty()) {
            listUser = Collections.EMPTY_LIST;

        }
        return listUser;
    }  
    
    @Override
    public UserDTO getUserById(String id) {
        String sql = "call up_slackbot_getUserById(?)";
        List<UserDTO> listUser = jdbcTemplate.query(sql, RowMapperUtils.getRowMapper(UserDTO.class), id);
        if (listUser.isEmpty()) {
            listUser = Collections.EMPTY_LIST;
            return new UserDTO();
        }
        return listUser.get(0);
    }
}
