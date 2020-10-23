/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intern.spring.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.intern.spring.model.QuestionsTemplate;
import com.intern.spring.process.QuestionsTemplateService;
import com.mysql.cj.log.Log;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Negan.Intern
 */
@CrossOrigin
@RestController
public class QuestionsTemplateController {

    @Autowired
    QuestionsTemplateService questionService;
    private static final Logger logger = Logger.getLogger(QuestionsTemplateController.class.getName());
    
    @RequestMapping(value = "/api/questiontemplate", method = RequestMethod.GET )
    public List<QuestionsTemplate> getQuestionTemplateList(){
    	logger.info("Get Question Template List");
    	List<QuestionsTemplate> questionList = questionService.getQuestionTemplateList();
    	return questionList;
    }
    
    @RequestMapping(value = "/api/questiontemplate/{id}", method = RequestMethod.GET)
    public QuestionsTemplate getQuestionTemplateById(@PathVariable("id") int id) {
    	logger.info("Start getQuestionTemplateById. ID= "+id);
    	return questionService.getQuestionTemplateById(id);
    }
    
    @RequestMapping(value = "/api/questiontemplate/insert", method = RequestMethod.POST)
    public int insertQuestionTemplate(@RequestBody QuestionsTemplate ques){
        return questionService.insertQuestionTemplate(ques);
    }
    
    @RequestMapping(value="/api/questiontemplate/update", method = RequestMethod.POST)
    public int updateQuestionTemplate(@RequestBody QuestionsTemplate ques){
        return questionService.updateQuestionTemplateById(ques);
    }
    
    @RequestMapping(value="/api/questiontemplate/delete/{id}",method = RequestMethod.DELETE)
    public int deleteQuestionTemplate(@PathVariable("id") int id){
        logger.info("Delete QuestionTemplate with templateId = "+id);
        return questionService.deleteQuestionTemplateById(id);
    }

}
