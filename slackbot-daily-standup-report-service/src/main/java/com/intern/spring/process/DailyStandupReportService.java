/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.model.DailyStandupReportSettings;
import com.intern.spring.model.ListDailyStandupDTO;
import java.util.List;

/**
 *
 * @author Negan.Intern
 */
public interface DailyStandupReportService {
    public List<ListDailyStandupDTO> getDailyStandupList();
    public DailyStandupReportSettings getDailyStandupDetailByStandupId(int id);
    public int insertDailyStandup(DailyStandupReportSettings dailyStandupReportSettings);
    public int deleteDailyStandupById(int id);
    public int updateDailyStandupById(DailyStandupReportSettings dailyStandupReportSettings);
    public String changeDailyStandupStatus(int id, String state);
}
