/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.UserReportDetailDTO;
import com.intern.spring.process.UserReportDetailService;
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
public class UserReportDetailController {
    @Autowired
    UserReportDetailService userReportDetailService;
    
    private static final Logger logger = Logger.getLogger(UserReportDetailController.class.getName());
    
    @RequestMapping(value = RESTURIConstants.GET_ALL_REPORT_DETAIL_BY_ID_REPORT, method = RequestMethod.GET)
    public List<UserReportDetailDTO> getAllReportDetailByReportId(@PathVariable("id") String reportId) {
        logger.info("Start get report bi id = " + reportId);
        List<UserReportDetailDTO> listReport = userReportDetailService.getAllReportDetailByReportId(reportId);
        return listReport;
    }
}
