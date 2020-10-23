/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import com.intern.spring.model.UserReportDetailDTO;
import java.util.List;

/**
 *
 * @author Celeste.Intern
 */
public interface UserReportDetailDAO {
    public List<UserReportDetailDTO> getReportDetailByReportId(String reportId);
}
