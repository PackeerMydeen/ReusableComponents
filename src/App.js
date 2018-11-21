import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import ProgressBar from './ProgressBar';
import CircularProgressBar from './CircularProgressBar';

class App extends Component {
	render() {
		return (
			<div>
				<Button type='button' name={'pack'} className={'buttons'} onClick={() => console.log('onClick')}>
					<span className={'button-text'}>Click Me</span>
				</Button>
				<ProgressBar percent={60} />
				<CircularProgressBar />
			</div>
		);
	}
}

export default App;
