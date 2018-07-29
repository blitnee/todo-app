import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import '../index.css';
import {
	handleInitialData
} from '../actions/shared'

class App extends React.Component {
	componentDidMount () {
		const { dispatch } = this.props
		dispatch(handleInitialData())
	}
	render() {
		if (this.props.loading === true) {
			return <div className='load-container'>
								<h1 className='load-text'>Loading</h1>
								<div className="loader"></div>
						 </div>
		}
		return (
			<div className='app-wrap'>
				<div className='header'>
					<p className='instructions-text'>
					Click Todos to cross them off your list!
					</p>
				</div>
				<div className='container'>
					<ConnectedTodos />
					<ConnectedGoals />
				</div>
			</div>
		)
	}
}

export default connect((state) => ({
	loading: state.loading
}))(App)