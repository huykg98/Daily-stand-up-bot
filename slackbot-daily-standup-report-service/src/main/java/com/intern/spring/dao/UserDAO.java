/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.UserDTO;
import java.util.List;

/**
 *
 * @author Celeste.Intern
 */
public interface UserDAO {
    public List<UserDTO> getUserList();
    public UserDTO getUserById(String id);
}
