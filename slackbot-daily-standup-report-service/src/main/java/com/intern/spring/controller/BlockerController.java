/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.Blocker;
import com.intern.spring.process.BlockerService;
import com.intern.spring.util.RESTURIConstants;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Celeste.Intern
 */

@CrossOrigin
@RestController
public class BlockerController {
    @Autowired 
    BlockerService blockerService;
    
    private static final Logger logger = Logger.getLogger(BlockerController.class.getName());
    
    @RequestMapping(value = RESTURIConstants.GET_BLOCKERS, method = RequestMethod.GET)
    public List<Blocker> getAllUser(@RequestParam("date") long date) {
        logger.info("Get blockers");
        List<Blocker> listBlocker = blockerService.getBlockerByDate(date);
        return listBlocker;
    }
}
