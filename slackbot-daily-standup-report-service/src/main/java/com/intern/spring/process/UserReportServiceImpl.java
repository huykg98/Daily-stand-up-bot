/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.UserReportDAO;
import com.intern.spring.model.UserReportDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Celeste.Intern
 */

@Service
public class UserReportServiceImpl implements UserReportService {
    
    @Autowired
    UserReportDAO userReportService;
    
    @Override
    public List<UserReportDTO> getAllReport(){
        return userReportService.getAllReport();
    }
    
    @Override
    public List<UserReportDTO> getReportFilter(long fromDate, long toDate, String username, String channel){
        return userReportService.getReportFilter(fromDate, toDate, username, channel);
    }
    
}
