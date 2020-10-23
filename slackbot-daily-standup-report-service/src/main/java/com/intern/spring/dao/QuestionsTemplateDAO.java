/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.dao;

import java.util.List;

import com.intern.spring.model.QuestionsTemplate;

/**
 *
 * @author Negan.Intern
 */
public interface QuestionsTemplateDAO {
    public List<QuestionsTemplate> getQuestionTemplatesList();
    public QuestionsTemplate getQuestionTemplateById(int id);
    public int insertQuestionTemplate(QuestionsTemplate questionTemplate);
    public int deleteQuestionTemplateById(int id);
    public int updateQuestionTemplateById(QuestionsTemplate questionTemplate);
}
