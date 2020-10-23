/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.UserReportDetailDAO;
import com.intern.spring.model.UserReportDetailDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Celeste.Intern
 */

@Service
public class UserReportDetailServiceImpl implements UserReportDetailService{
    
    @Autowired
    UserReportDetailDAO userReportDetailService;
    
    @Override
    public List<UserReportDetailDTO> getAllReportDetailByReportId(String reportId){
        return userReportDetailService.getReportDetailByReportId(reportId);
    }
}
