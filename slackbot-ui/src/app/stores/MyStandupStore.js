import { observable, action, computed } from 'mobx';
import * as MyStandupService from './../services/MyStandupService';
import * as ChannelService from './../services/ChannelService';
import * as QuestionTemplateService from './../services/QuestionsTemplateSerivce';

export default class MyStandupStore {
    @observable myStandupList=[];

    @observable currentDailyStandupDetail = {
        channelSelectedList : [],
        channelList : [],

    };
    @observable channelOfDailyList = [];
    @observable questionOfDailyList = [];

    @observable dailyStatus = {
        id: '',
        dailyTemplateName: '',
        dateCreated: '',
        questionsTemplateName: '',
        period: '',
        dayOfWeek: '',
        state: "false",
        remindTime:'',
        remindMessage:'',
        channelList: [],
        questionList: []
    };
        
    @observable questionTemplateList = [];
    @observable channelList = [];
    // @observable channelSelectedList = [];

    @observable newDailyStandupDTO={
        questionsTemplateName : '',
        period : '',
        channelList : [],
        remindTime:'',
        dayOfWeek : "",
        remindMessage:'',
        dailyTemplateName:'',
        channelSelectedList : [],
        channelSelected: '',
    };

    @observable daysOfWeekCheckBoxes = new Map([
      ]);
    @observable daysOfWeekCheckBoxesForInsert = new Map([
        ["Sunday", false],
        ["Monday", false],
        ["Tuesday", false],
        ["Wednesday", false],
        ["Thursday", false],
        ["Friday", false],
        ["Saturday", false]
    ]);
    @observable period =  
        [{
            "id": "Weekly",
            "period": "Weekly",
        },
        {
            "id": "Bi-Weekly",
            "period": "Bi-Weekly",
        },
        {
            "id": "Every 4 Weeks",
            "period": "Every 4 Weeks",
    }];
    @observable isLoadingDailyStandup = false;
    @observable isLoadingDailyStandupDetail = false;

    
    @action
    refreshData() {
      this.newDailyStandupDTO={
        questionsTemplateName : '',
        period : '',
        channelList : [],
        remindTime:'',
        dayOfWeek : "",
        remindMessage:'',
        dailyTemplateName:'',
        };
        this.daysOfWeekCheckBoxesForInsert={};
    }
    @action
    setDaysOfWeekCheckBox(k, newValue) {
        this.daysOfWeekCheckBoxes.set(k, newValue);
        var res = [];
        this.daysOfWeekCheckBoxes.forEach(function(val, key) {
        if (val === true) res.push(1);
        else res.push(0);
        });
        this.currentDailyStandupDetail.dayOfWeek = res.toString();
    }
    @action
    setDaysOfWeekCheckBoxInsert(k, newValue) {
        this.daysOfWeekCheckBoxesForInsert.set(k, newValue);
        var res = [];
        this.daysOfWeekCheckBoxesForInsert.forEach(function(val, key) {
        if (val === true) res.push(1);
        else res.push(0);
        });
        this.newDailyStandupDTO.dayOfWeek = res.toString();
    }
    @action async getMyStandupList(){
        this.isLoadingDailyStandup = true ;
        let myStandupList = MyStandupService.getAllStandup();
        myStandupList.then(response => {
            if(!response.error){
                this.myStandupList = response;
                this.isLoadingDailyStandup = false;
            }
        })
    }

    @action getDailyStandupDetail(id) {
        this.isLoadingDailyStandupDetail = true;
        let standupDetails = MyStandupService.getDailyStandupDetailById(id);
        standupDetails.then(response => {
            if(!response.error){
                this.currentDailyStandupDetail = response;
                this.channelOfDailyList = this.currentDailyStandupDetail.channelList;
                this.questionOfDailyList = this.currentDailyStandupDetail.questionList;
                let myArray = this.currentDailyStandupDetail.dayOfWeek.split(',').map(Number);
                let sun = (myArray[0]===1)?true:false;
                let mon = (myArray[1]===1)?true:false;
                let tue = (myArray[2]===1)?true:false;
                let wed = (myArray[3]===1)?true:false;
                let thu = (myArray[4]===1)?true:false;
                let fri = (myArray[5]===1)?true:false;
                let sat = (myArray[6]===1)?true:false;
                this.daysOfWeekCheckBoxes.set('Sunday', sun);
                this.daysOfWeekCheckBoxes.set('Monday', mon);
                this.daysOfWeekCheckBoxes.set('Tuesday', tue);
                this.daysOfWeekCheckBoxes.set('Wednesday', wed);
                this.daysOfWeekCheckBoxes.set('Thursday', thu);
                this.daysOfWeekCheckBoxes.set('Friday', fri);
                this.daysOfWeekCheckBoxes.set('Saturday', sat);
                this.isLoadingDailyStandupDetail = false;       
            }
        })
    }  

    @action changeStatus(id){
        let standupDetails = MyStandupService.getDailyStandupDetailById(id);
        standupDetails.then(res => {
            this.dailyStatus = res; 
            if(this.dailyStatus.state==="true"){
                this.dailyStatus.state="false";
            }else{
                this.dailyStatus.state="true";
            }      
            MyStandupService.changeStatus(id,this.dailyStatus.state).then(response => {
                let count = this.myStandupList.map((list,index) => {
                    if(list.id===this.dailyStatus.id){
                        list.state=this.dailyStatus.state;
                        this.myStandupList[index]=list;
                    }
                })
            });
        })        
    }

    @action async getChannelList(){
        let channels = ChannelService.getAllChannel();
        channels.then(response => {
            if(!response.error){
                this.channelList = response;
            }
        })
    }

    @action async getQuestionTemplateList(){
        let questions = QuestionTemplateService.getAll();
        questions.then(response => {
            if(!response.error){
                this.questionTemplateList = response;
            }
        })
    }

    @action 
    setSelectedQuestionsTemplate(selectedTemplate) {
        this.newDailyStandupDTO.questionsTemplateName = selectedTemplate

    }
    @action 
    setSelectedQuestionsTemplateForUpdate(selectedTemplate) {
        this.currentDailyStandupDetail.questionsTemplateName = selectedTemplate
    }
    @action 
    setSelectedTimeRemind(selectedTimeRemind) {
        this.newDailyStandupDTO.remindTime = selectedTimeRemind

    }
    @action 
    setSelectedTimeRemindForUpdate(selectedTimeRemind) {
        this.currentDailyStandupDetail.remindTime = selectedTimeRemind

    }
    @action 
    setSelectedPeriod(selectedPeriod) {
        this.newDailyStandupDTO.period = selectedPeriod
    }
    @action 
    setSelectedPeriodForUpdate(selectedPeriod) {
        this.currentDailyStandupDetail.period = selectedPeriod
    }
    @action 
    setSelectedChannel(selectedChannel) {
        this.newDailyStandupDTO.channelSelectedList = selectedChannel
        this.newDailyStandupDTO.channelList = this.newDailyStandupDTO.channelSelectedList.map(item => {
            return {  
              id: item.value,
              channelName: item.label
            };
        });
    }
    @action 
    setSelectedChannelForUpdate(selectedChannel) {
        this.currentDailyStandupDetail.channelSelectedList = selectedChannel
        this.currentDailyStandupDetail.channelList = this.currentDailyStandupDetail.channelSelectedList.map(item => {
            return {  
              id: item.value,
              channelName: item.label
            };
        });
    }

    @action 
    setNewStandup(value) {
          MyStandupService.addDailyStandup(value).then(res => {
            this.getMyStandupList();
        })
    }
    @action updateStandup(value){
        MyStandupService.updateDailyStandup(value).then(res => {
            this.getMyStandupList();
        })
    }
    @computed get channelOptions() {
        return this.channelList.map(x => ({ label: x.channelName, value: x.id }))
    }   

}
