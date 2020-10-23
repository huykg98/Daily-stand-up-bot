/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.HomeController;
import com.intern.spring.model.DailyStandupReportSettings;
import com.intern.spring.model.DialogTemplateDTO;
import com.intern.spring.model.ListDailyStandupDTO;
import com.intern.spring.util.RESTURIConstants;
import com.intern.spring.process.DailyStandupReportService;
import com.intern.spring.process.DailyStandupReportServiceImpl;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Negan.Intern
 */
@CrossOrigin
@RestController
public class DailyStandupReportController {

    @Autowired
    DailyStandupReportService standupService;
    private static final Logger logger = Logger.getLogger(DailyStandupReportController.class.getName());

    @RequestMapping(value = RESTURIConstants.GET_ALL_STANDUP, method = RequestMethod.GET)
    public List<ListDailyStandupDTO> getAllStandup() {
        logger.info("Start getAllStandup");
        List<ListDailyStandupDTO> standups = standupService.getDailyStandupList();
        return standups;
    }
    
        
    @RequestMapping(value = RESTURIConstants.GET_STANDUP_BY_ID, method = RequestMethod.GET)
    public DailyStandupReportSettings getDailyStandupDetailByStandupId(@PathVariable("id") int standupId) {
	logger.info("Start getDailyStandupDetailByStandupId. ID="+standupId );	
	return standupService.getDailyStandupDetailByStandupId(standupId);  
    }
    
    @RequestMapping(value = RESTURIConstants.CREATE_DAILY_STANDUP, method = RequestMethod.POST)
    public int insertDailyStandup(@RequestBody DailyStandupReportSettings report){
        
        logger.info("Start insertDailyStandup");
        return standupService.insertDailyStandup(report);
    }
    @RequestMapping(value = RESTURIConstants.UPDATE_DAILY_STANDUP, method = RequestMethod.POST)
    public int updateDailyStandupById(@RequestBody DailyStandupReportSettings report){
        logger.info("Start updateDailyStandup");
        return standupService.updateDailyStandupById(report);
    }
    @RequestMapping(value=RESTURIConstants.CHANGE_STATUS, method = RequestMethod.POST)
    public String changeDailyStanupStatus(@PathVariable("id") int id,@PathVariable String state ){
        logger.info("Change DailyStandup status");
        return standupService.changeDailyStandupStatus(id,state);
    }
  }
