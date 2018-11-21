import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
	render() {
		return (
			<div>
				<Button type='button' name={'pack'} className={'buttons'} onClick={() => console.log('onClick')}>
					<span className={'button-text'}>Click Me</span>
				</Button>
			</div>
		);
	}
}

export default App;
