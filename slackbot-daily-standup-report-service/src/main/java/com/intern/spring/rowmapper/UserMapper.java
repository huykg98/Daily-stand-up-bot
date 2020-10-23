/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.rowmapper;

import com.intern.spring.model.Channel;
import com.intern.spring.model.UserDTO;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author Celeste.Intern
 */
public class UserMapper implements RowMapper<UserDTO>{
    @Override
    public UserDTO mapRow(ResultSet rs, int i) throws SQLException {
        UserDTO user = new UserDTO();
        user.setUserId(rs.getString("user_id"));
        user.setUsername(rs.getString("user_name"));
        return user;
    }
}
