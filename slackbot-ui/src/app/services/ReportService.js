
export const getReportFilter_V2 = async(fromDate, toDate, username, channel)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/report-view`;
    const startpoint = 'http://localhost:8080/slackbot-daily-standup-report-service'
    var url = new URL(`${startpoint}/${endpoint}`)
    var params = {fromDate, toDate, username, channel}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))   
    const response = await fetch(url, options).then(response => response.json());
    return response;
}