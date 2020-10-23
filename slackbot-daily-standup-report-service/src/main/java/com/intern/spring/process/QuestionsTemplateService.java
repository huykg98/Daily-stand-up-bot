/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import java.util.List;

import com.intern.spring.model.QuestionsTemplate;

/**
 *
 * @author Negan.Intern
 */
public interface QuestionsTemplateService {
    public List<QuestionsTemplate> getQuestionTemplateList();
    public QuestionsTemplate getQuestionTemplateById(int id);
    public int insertQuestionTemplate(QuestionsTemplate ques);
    public int updateQuestionTemplateById(QuestionsTemplate ques);
    public int deleteQuestionTemplateById(int id);
}
