/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.UserDTO;
import com.intern.spring.process.UserService;
import com.intern.spring.util.RESTURIConstants;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Celeste.Intern
 */

@RestController
public class UserController {
    @Autowired
    UserService userService;
    
    private static final Logger logger = Logger.getLogger(UserController.class.getName());
    
    @RequestMapping(value = RESTURIConstants.GET_ALL_USER, method = RequestMethod.GET)
    public List<UserDTO> getAllUser() {
        logger.info("Start get all report");
        List<UserDTO> listUser = userService.getAllUser();
        return listUser;
    }
    
    @RequestMapping(value = RESTURIConstants.GET_USER_BY_ID, method = RequestMethod.GET)
    public UserDTO getUserById( @PathVariable("id") String id ) {
        logger.info("Start get user by id = " + id);
        UserDTO user = userService.getUserById(id);
        return user;
    }
}
