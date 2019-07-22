import React from 'react';

import ToolsStore from '../stores/ToolsStore';
import ToolsActions from '../actions/ToolsActions';

import ToolsGrid from './ToolsGrid.js';

import './App.less'

function getStateFromFlux() {
	return {
		isLoading: ToolsStore.isLoading(),
		tools: ToolsStore.getTools()
	};
}

const App = React.createClass({
	getInitialState() {
		return getStateFromFlux();
	},

	componentWillMount() {
        ToolsActions.loadTools();
    },

    componentDidMount() {
        ToolsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        ToolsStore.removeChangeListener(this._onChange);
    },

	render() {
		return (
			<div className='App'>
				<h2 className='App__header'>Dashboard</h2>
				<ToolsGrid tools={this.state.tools} />
			</div>
		);
		
	},

	_onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;