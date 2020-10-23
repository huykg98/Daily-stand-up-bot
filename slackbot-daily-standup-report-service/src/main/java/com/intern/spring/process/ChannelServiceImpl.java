/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.ChannelDAO;
import com.intern.spring.model.Channel;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Celeste.Intern
 */

@Service
public class ChannelServiceImpl implements ChannelService {
    @Autowired
    ChannelDAO channelService;
    
    @Override
    public List<Channel> getAllChannel(){
        return channelService.getAllChannel();
    }
}
