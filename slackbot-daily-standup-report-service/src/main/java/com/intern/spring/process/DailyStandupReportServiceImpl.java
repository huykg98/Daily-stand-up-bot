/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.dao.DailyStandupReportDAO;
import com.intern.spring.model.DailyStandupReportSettings;
import com.intern.spring.model.ListDailyStandupDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Negan.Intern 
 */
@Service
public class DailyStandupReportServiceImpl implements DailyStandupReportService{
    @Autowired
    DailyStandupReportDAO standupDAO;  
    @Override
    public List<ListDailyStandupDTO> getDailyStandupList() {
        return standupDAO.getDailyStandupList();
    }

    @Override
    public DailyStandupReportSettings getDailyStandupDetailByStandupId(int id) {
        return standupDAO.getDailyStandupDetailByStandupId(id);
    }

    @Override
    public int insertDailyStandup(DailyStandupReportSettings dailyStandupReportSettings) {
        return standupDAO.insertDailyStandup(dailyStandupReportSettings);
    }

    @Override
    public int deleteDailyStandupById(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public int updateDailyStandupById(DailyStandupReportSettings dailyStandupReportSettings) {
        return standupDAO.updateDailyStandupById(dailyStandupReportSettings);
    }

    @Override
    public String changeDailyStandupStatus(int id,String state) {
        return standupDAO.changeDailyStandupStatus(id,state);
    }
    
}
