/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.model.ScheduleDTO;
import java.util.List;

/**
 *
 * @author Negan.Intern
 */
public interface ScheduleService {

    public List<ScheduleDTO> getScheduleList();

}
