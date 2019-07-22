import React from 'react';
import Tool from './Tool';
import Plot from 'react-plotly.js';

import './ToolsGrid.less'

const ToolsGrid = React.createClass({
	render() {
		return (
			<div className="ToolsGrid">
			{
	            // this.props.tools.map(tool =>
	                // <Tool
	                // 	key={tool.id}
	                //     title={tool.title}
	                // >
	                //     {tool.date.map(date =>
	                //     	<div>{date}</div>
	                //     )}
	                //     {' '}
	                //     {tool.value}
	                // </Tool>

	            this.props.tools.map(tool =>
		            <Plot
				         data={[
					          {
					            x: tool.date,
					            y: tool.value,
					            type: 'scatter',
					          }
					        ]}
				        layout={{width: 320, height: 240, title: tool.title}}
				    />

	            )
	        }
	        </div>
        )
	}
});

export default ToolsGrid;