/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.ReportViewDAO;
import com.intern.spring.model.ReportObject;
import com.intern.spring.model.ReportViewDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Celeste.Intern
 */

@Service
public class ReportViewServiceImpl implements ReportViewService{
    
    @Autowired
    ReportViewDAO reportViewService;
    
    @Override
    public List<ReportObject> getReportView(long fromDate, long toDate, String username, String channel){
        return reportViewService.getReportView(fromDate, toDate, username, channel);
    }
}
