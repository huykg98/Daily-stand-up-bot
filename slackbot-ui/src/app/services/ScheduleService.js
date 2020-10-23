import { API } from './../config/apiconfig';

export const getAllSchedule = async()=>{
    const options = {
        method: 'GET'
    }
    const endpoint = 'api/schedules';
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    const url = `${startpoint}/${endpoint}`
    const response = await fetch(url, options).then(response => response.json());
    return response;
}