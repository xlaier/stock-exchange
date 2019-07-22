import React from 'react';

const Tool = React.createClass({
	render() {
		return (
            <div className='Tool'>
                {
                    this.props.title
                    ?
                        <h4 className='Tool__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className='Tool__text'>{this.props.children}</div>
            </div>
        );
	}
});

export default Tool;