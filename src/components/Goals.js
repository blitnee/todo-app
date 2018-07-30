import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
	handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
	removeItem = (goal) => {
		this.props.dispatch(handleDeleteGoal(goal))
	}
	render () {
		return (
			<div className='block'>
				<h1 className='list-heading'>Goals List</h1>
				<List
					items={this.props.goals}
					remove={this.removeItem}
				/>
			</div>
		)
	}
}

export default connect((state) => ({
	goals: state.goals
}))(Goals)