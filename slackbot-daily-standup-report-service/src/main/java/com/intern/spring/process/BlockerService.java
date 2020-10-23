/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import com.intern.spring.model.Blocker;
import java.util.List;

/**
 *
 * @author Celeste.Intern
 */
public interface BlockerService {
    public List<Blocker> getBlockerByDate(long date);
}
