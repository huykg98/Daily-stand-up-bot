/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.process;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intern.spring.dao.QuestionsTemplateDAO;
import com.intern.spring.model.QuestionsTemplate;

/**
 *
 * @author Negan.Intern
 */
@Service
public class QuestionsTemplateServiceImpl implements QuestionsTemplateService {

	@Autowired
	QuestionsTemplateDAO questionService;
	@Override
	public List<QuestionsTemplate> getQuestionTemplateList() {
		return questionService.getQuestionTemplatesList();
	}

	@Override
	public QuestionsTemplate getQuestionTemplateById(int id) {
		return questionService.getQuestionTemplateById(id);
	}

        @Override
        public int insertQuestionTemplate(QuestionsTemplate ques) {
            return questionService.insertQuestionTemplate(ques);
        }

        @Override
        public int updateQuestionTemplateById(QuestionsTemplate ques) {
            return questionService.updateQuestionTemplateById(ques);
        }

        @Override
        public int deleteQuestionTemplateById(int id) {
            return questionService.deleteQuestionTemplateById(id);
        }
    
}
