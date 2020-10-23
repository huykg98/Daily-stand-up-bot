/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.ScheduleDAO;
import com.intern.spring.model.ScheduleDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Negan.Intern
 */
@Service
public class ScheduleServiceImpl implements ScheduleService{
    @Autowired
    ScheduleDAO scheduleDAO;  
    @Override
    public List<ScheduleDTO> getScheduleList() {
        return scheduleDAO.getScheduleList();
    }

}
