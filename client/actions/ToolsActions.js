import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const ToolActions = {
    loadTools() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_TOOLS_REQUEST
        });

        api.listTools()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TOOLS_SUCCESS,
                tools: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TOOLS_FAIL,
                error: err
            })
        );
    },

    createTool(tool) {
        api.createTool(tool)
        .then(() =>
            this.loadTools()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteTool(toolId) {
        api.deleteTool(toolId)
        .then(() =>
            this.loadTools()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default ToolActions;
