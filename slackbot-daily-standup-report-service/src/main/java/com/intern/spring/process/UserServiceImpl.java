/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.UserDAO;
import com.intern.spring.model.UserDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Celeste.Intern
 */

@Service
public class UserServiceImpl implements UserService{
    
    @Autowired
    UserDAO userService;
    
    @Override
    public List<UserDTO> getAllUser(){
        return userService.getUserList();
    }
    
    @Override
    public UserDTO getUserById(String id){
        return userService.getUserById(id);
    }
    
}
