/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;
import com.intern.spring.model.ListDailyStandupDTO;
import com.intern.spring.model.ScheduleDTO;
import com.intern.spring.process.DailyStandupReportService;
import com.intern.spring.process.ScheduleService;
import com.intern.spring.util.RESTURIConstants;
import java.util.List;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author Negan.Intern
 */
@CrossOrigin
@RestController
public class ScheduleController {
    @Autowired
    ScheduleService scheduleService;
    private static final Logger logger = Logger.getLogger(ScheduleController.class.getName());

    @RequestMapping(value = RESTURIConstants.GET_ALL_SCHEDULE, method = RequestMethod.GET)
    public List<ScheduleDTO> getScheduleList() {
        logger.info("Start get all schedule ");
        List<ScheduleDTO> schedules = scheduleService.getScheduleList();
        return schedules;
    }
}

