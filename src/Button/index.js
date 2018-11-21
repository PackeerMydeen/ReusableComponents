import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({ name, type, className, isDisable, onClick, onMouseOver, onMouseOut, children, ...props }) => {
	return (
		<button
			className={!isDisable ? `button-1 ${className}` : `disabled ${className}`}
			name={name}
			type={type}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
	children: 'Click Me',
	className: ''
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	isDisable: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	onMouseOver: PropTypes.func,
	onMouseOut: PropTypes.func,
	children: PropTypes.node,
	className: PropTypes.string
};

export default Button;
