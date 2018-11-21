import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const CircularProgressBar = props => {
	const width = `${props.width}px`;
	const height = `${props.height}px`;
	const color = `2px solid ${props.color}`;
	return <div className='loader' style={{ width: width, height: height, borderTop: color }} />;
};

CircularProgressBar.defaultProps = {
	width: 50,
	height: 50,
	color: '#3498db'
};

CircularProgressBar.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string
};

export default CircularProgressBar;
