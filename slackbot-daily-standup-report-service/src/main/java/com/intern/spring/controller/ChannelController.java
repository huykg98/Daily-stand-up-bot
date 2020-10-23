/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.Channel;
import com.intern.spring.process.ChannelService;
import com.intern.spring.util.RESTURIConstants;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Celeste.Intern
 */

@CrossOrigin
@RestController
public class ChannelController {
    @Autowired 
    ChannelService channelService;
    
    private static final Logger logger = Logger.getLogger(ChannelController.class.getName());
    
    @RequestMapping(value = RESTURIConstants.GET_ALL_CHANNEL, method = RequestMethod.GET)
    public List<Channel> getAllUser() {
        logger.info("Start get all channel");
        List<Channel> listChannel = channelService.getAllChannel();
        return listChannel;
    }
}
