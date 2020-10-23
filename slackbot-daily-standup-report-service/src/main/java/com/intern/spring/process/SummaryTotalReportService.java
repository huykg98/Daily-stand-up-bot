/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.model.SummaryTotalReportDTO;

/**
 *
 * @author Celeste.Intern
 */
public interface SummaryTotalReportService {
    public SummaryTotalReportDTO getSummaryTotalReport(long date);
}
