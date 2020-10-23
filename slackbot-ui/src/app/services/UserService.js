export const getUserById = async(id)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/user/${id}`;
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    const url = `${startpoint}/${endpoint}`
    const response = await fetch(url, options).then(response => response.json());
    return response;
}