/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import com.intern.spring.model.SummaryDTO;
import com.intern.spring.model.SummaryTotalReportDTO;
import com.intern.spring.process.SummaryService;
import com.intern.spring.process.SummaryTotalReportService;
import com.intern.spring.util.RESTURIConstants;
import java.time.Instant;
import java.util.List;
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
public class SummaryReportController {
    @Autowired
    SummaryService summaryService;
    
    @Autowired
    SummaryTotalReportService summaryTotalReportService;
    
    @RequestMapping(value = RESTURIConstants.GET_SUMMARY, method = RequestMethod.GET)
    public List<SummaryDTO> getSummaryReport(@RequestParam("date") long date) {
        List<SummaryDTO> listSummary = summaryService.getSummaryReport(date);
        return listSummary;
    }
    
    @RequestMapping(value = RESTURIConstants.GET_SUMMARY_TOTAL_REPORT, method = RequestMethod.GET)
    public SummaryTotalReportDTO getSummaryTotalReport(@RequestParam("date") long date) {
        SummaryTotalReportDTO summaryTotalReport = summaryTotalReportService.getSummaryTotalReport(date);
        return summaryTotalReport;
    }
}
