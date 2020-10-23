/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.ReportObject;
import com.intern.spring.model.ReportViewDTO;
import com.intern.spring.process.ReportViewService;
import com.intern.spring.util.RESTURIConstants;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
public class ReportViewController {
    @Autowired
    ReportViewService reportViewService;
    
    @RequestMapping(value = RESTURIConstants.GET_REPORT_VIEW, method = RequestMethod.GET)
    public List<ReportObject> getSummaryReport(
                @RequestParam("fromDate") long fromDate, 
                @RequestParam("toDate") long toDate,
                @RequestParam("username") String username,
                @RequestParam("channel") String channel) {

        List<ReportObject> listReport = reportViewService.getReportView(fromDate, toDate, username, channel);
        return listReport;
    }
}
