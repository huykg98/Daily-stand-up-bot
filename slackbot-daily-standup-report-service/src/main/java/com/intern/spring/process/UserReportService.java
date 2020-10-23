/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.model.UserReportDTO;
import java.util.List;

/**
 *
 * @author Celeste.Intern
 */
public interface UserReportService {
    public List<UserReportDTO> getAllReport();
    public List<UserReportDTO> getReportFilter(long fromDate, long toDate, String username, String channel);
}
