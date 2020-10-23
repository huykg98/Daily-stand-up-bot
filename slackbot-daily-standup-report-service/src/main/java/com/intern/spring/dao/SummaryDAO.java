/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.SummaryDTO;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Celeste.Intern
 */


public interface SummaryDAO {
    public List<SummaryDTO> getSummaryReport(long date);
}
