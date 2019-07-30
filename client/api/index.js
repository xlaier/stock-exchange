import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listTools() {
        return axios.get(`${apiPrefix}/tools`);
    },

    createTool(data) {
        return axios.post(`${apiPrefix}/tools`, data);
    },

    deleteTool(toolId) {
        return axios.delete(`${apiPrefix}/tools/${noteId}`);
    },
}
