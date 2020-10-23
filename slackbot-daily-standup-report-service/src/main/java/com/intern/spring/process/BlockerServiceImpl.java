/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.BlockerDAO;
import com.intern.spring.model.Blocker;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Celeste.Intern
 */

@Service
public class BlockerServiceImpl implements BlockerService{
    
    @Autowired
    BlockerDAO blockerService;
    
    @Override
    public List<Blocker> getBlockerByDate(long date){
        return blockerService.getBlockerByDate(date);
    }
}
