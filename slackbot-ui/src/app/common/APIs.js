import { API } from "../config/apiconfig";

const templateServicePath = 'hrm-ui/data-resources/template-layout';
const APIS = {
    getTemplateURL: function (id) {
        let api = `${API.BASE_URL}/${API.WEB_TEMPLATE}`;
        api = api.replace('{id}', id);
        return api;
    },
    getTemplateURLFromLocal: function (template) {
        let url = `${templateServicePath}/${template}.json`;
        return url
    },
};

export default APIS;




