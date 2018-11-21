import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
	getColor = () => {
		if (this.props.percent === 100) {
			return '#1e91e4';
		}

		return this.props.percent > 50 ? 'blue' : '#d0021b';
	};

	getWidthAsPercent = () => {
		return +this.props.width * (this.props.percent / 100);
	};

	render() {
		const { percent, width, height } = this.props;
		const widthPercent = `${width}%`;
		return (
			<div style={{ backgroundColor: '#ccc', width: widthPercent }}>
				<div
					style={{
						backgroundColor: this.getColor(percent),
						width: `${this.getWidthAsPercent()}%`,
						height
					}}
				/>
			</div>
		);
	}
}

ProgressBar.propTypes = {
	percent: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number
};

ProgressBar.defaultProps = {
	height: 5,
	width: 100
};

export default ProgressBar;
