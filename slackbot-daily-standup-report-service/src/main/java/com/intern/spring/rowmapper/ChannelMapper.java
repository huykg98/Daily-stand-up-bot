/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.rowmapper;
import com.intern.spring.model.Channel;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
/**
 *
 * @author Negan.Intern
 */
public class ChannelMapper implements RowMapper<Channel>{
     @Override
    public Channel mapRow(ResultSet rs, int i) throws SQLException {
        Channel channel = new Channel();
        channel.setId(rs.getString("channel_id"));
        channel.setChannelName(rs.getString("channel_name"));

        return channel;
    }
}
