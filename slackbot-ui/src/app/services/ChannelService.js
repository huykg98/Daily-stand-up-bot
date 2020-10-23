export const getAllChannel = async()=>{
    const options = {
        method: 'GET'
    }
    const endpoint = 'api/channel';
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    const url = `${startpoint}/${endpoint}`
    const response = await fetch(url, options).then(response => response.json());
    return response;
}