import { API } from './../config/apiconfig';

export const getAllStandup = async()=>{
    const options = {
        method: 'GET'
    }
    const endpoint = 'api/standups' 
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options).then(response => response.json());
    return response;
}

export const getDailyStandupDetailById = async(id)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/standup/${id}`;
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options).then(response => response.json());
    return response;
}

export const changeStatus = async(id,state)=>{
    const options = {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
    }
    const endpoint = `api/standup/status/${id}/${state}` 
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options).then(response => response.json());
    return response;
}

export const addDailyStandup = async (value) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
    }
    const endpoint = 'api/standup/create'
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}

export const updateDailyStandup = async (value) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
    }
    const endpoint = 'api/standup/update'
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}