/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.UserReportDTO;
import com.intern.spring.process.UserReportService;
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
public class UserReportController {
    @Autowired
    UserReportService userReportService;
    
    private static final Logger logger = Logger.getLogger(UserReportController.class.getName());
    
    @RequestMapping(value = RESTURIConstants.GET_ALL_REPORT, method = RequestMethod.GET)
    public List<UserReportDTO> getAllReport() {
        logger.info("Start get all report");
        List<UserReportDTO> listReport = userReportService.getAllReport();
        return listReport;
    }
    
    @RequestMapping(value = RESTURIConstants.GET_USER_REPORT_FILTER, method = RequestMethod.GET)
    public List<UserReportDTO> getReportFilter( 
                @RequestParam("fromDate") long fromDate, 
                @RequestParam("toDate") long toDate,
                @RequestParam("username") String username,
                @RequestParam("channel") String channel) {
        logger.info("Start get all report");
        List<UserReportDTO> listReport = userReportService.getReportFilter(fromDate, toDate, username, channel);
        return listReport;
    }
}
