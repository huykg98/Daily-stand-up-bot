import { API } from './../config/apiconfig';

export const getSummaryReport = async(date)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = '/api/summary' 
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    var url = new URL(`${startpoint}/${endpoint}`)
    var params = {date}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))   
    const response = await fetch(url, options).then(response => response.json());
    return response;
}

export const getBlockers = async(date)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/blockers`;
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    var url = new URL(`${startpoint}/${endpoint}`)
    var params = {date}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))   
    const response = await fetch(url, options).then(response => response.json());
    return response;
}

export const getSummaryTotalReport = async(date)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/total-report`;
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    var url = new URL(`${startpoint}/${endpoint}`)
    var params = {date}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))   
    const response = await fetch(url, options).then(response => response.json());
    return response;
}