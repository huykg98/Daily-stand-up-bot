import { API } from './../config/apiconfig';

export const getAll = async()=>{
    const options = {
        method: 'GET'
    }
    // const endpoint = '/templatelist.json?key=cf3bee00' 
    // const url = `${API.BASE_URL}/${endpoint}`
    const endpoint = 'api/questiontemplate' 
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}

export const getQuestionTemplate = async(id)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/questiontemplate/${id}`
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url,options);
    return await response.json();
}

export const deleteQuestionTemplate = async (id) => {
    const options = {
        method: 'DELETE'
    }
    const endpoint = `api/questiontemplate/delete/${id}`
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}

export const addQuestionTemplate = async (value) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
    }
    const endpoint = 'api/questiontemplate/insert'
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}

export const updateQuestionTemplate = async (value) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
    }
    const endpoint = 'api/questiontemplate/update'
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}
export const getDialogFormDetail = async(id)=>{
    const options = {
        method: 'GET'
    }
    const endpoint = `api/dialogformdetail/${id}` 
    const url = `${API.MAIN_URL}/${endpoint}`
    const response = await fetch(url, options);
    return await response.json();
}
