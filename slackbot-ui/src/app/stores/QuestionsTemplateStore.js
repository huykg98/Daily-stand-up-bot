import { observable, action } from 'mobx';
import * as QuestionsTemplateService from './../services/QuestionsTemplateSerivce';

export default class QuestionsTemplateStore {
    @observable questionsTemplateList=[];
    @observable questionDetail=[];
    @observable templateObject = {
        name: '',
        description: '',
        questions: [
            {
                name: '',
                label: '',
                type: 'text',
                subType: '',
                placeHolder: '',
                optional: 0,
                maxLength: 150,
                minLength: 5,
                hint: '',
                value: ''
            } 
        ]
    }

    @observable currentTemplate = {
        name: '',
        description: '',
        questions: [
            {
                name: '',
                label: '',
                type: 'text',
                subType: '',
                placeHolder: '',
                optional: 0,
                maxLength: 150,
                minLength: 5,
                hint: '',
                value: ''
            }
        ]
    }

    @action addQuestion(question) {
        this.currentTemplate.questions.push(question);
    }

    @action deleteQuestion(index) {
        this.currentTemplate.questions.splice(index);
    }

    @action insertQuestionTemplate(value){
        QuestionsTemplateService.addQuestionTemplate(value).then(res => {
            this.getQuestionsTemplateList();
        })
    }

    @action getDialogFormDetail(id){
        QuestionsTemplateService.getDialogFormDetail(id).then(res => {
           this.questionDetail=res;
        });   
    }

    @action getDataToMobx(id){
        QuestionsTemplateService.getQuestionTemplate(id).then(res => {
            this.templateObject = res;
            QuestionsTemplateService.getDialogFormDetail(id).then(response => {
                this.templateObject.questions = response;
            })
        })
       
    }

    @action updateQuestionTemplate(value){
        QuestionsTemplateService.updateQuestionTemplate(value).then(res => {
            this.getQuestionsTemplateList();
        })
    }

    @action deleteQuestionTemplate(id) {
        QuestionsTemplateService.deleteQuestionTemplate(id).then(res => {
            this.getQuestionsTemplateList();
        });
    }

    

    @action changeQuestionValue(index, value) {
        this.currentTemplate.questions[index].label = value;
    }

    @action async getQuestionsTemplateList() {
        let questionsTemplateList = QuestionsTemplateService.getAll();
        questionsTemplateList.then(response => {
            if(!response.error){
                this.questionsTemplateList = response
            }
            else{
                let res=[{"id":1,"template_name":"Daily Standup dev","status":false,"description":"The great Scrum 3 key questions for a daily stand-up with your team.","group":"#Team-Dev"},
                {"id":2,"template_name":"Daily report qa","status":true,"description":"The great Scrum 3 key questions for a daily stand-up with your team.","group":"#Team-QA"},
                {"id":3,"template_name":"Daily report hr","status":false,"description":"The great Scrum 3 key questions for a daily stand-up with your team.","group":"#Team-OS"},
                {"id":4,"template_name":"Daily report intern","status":true,"description":"The great Scrum 3 key questions for a daily stand-up with your team.","group":"#Code88-nowork"}]

                this.questionsTemplateList=res;
                //this.errorMessage = response.error
            }
        })  
   }

}