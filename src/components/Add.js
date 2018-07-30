import React from 'react'
import { connect } from 'react-redux'
import {
	handleAddGoal,
} from '../actions/goals'
import {
	handleAddTodo,
} from '../actions/todos'

class Add extends React.Component {

	state = {
		type: ''
	}

	setType = (type) => {
		this.setState({ type })
	}

	addItem = (e) => {
		e.preventDefault()
		if (this.state.type === 'todo') {
			this.props.dispatch(handleAddTodo(
				this.input.value,
				() => this.input.value = ''
			))
		} else if (this.state.type === 'goal'){
			this.props.dispatch(handleAddGoal(
				this.input.value,
				() => this.input.value = ''
			))
		}
	}

	render() {
		return (
			<div className='block'>
				<div className='add-container'>
					<input
						className='add-field'
						type='text'
						placeholder='Add Item'
						ref={(input) => this.input = input}
					/>
					<label htmlFor='type'>Add as a </label>
					<select id='type' onChange={(e) => this.setType(e.target.value)}>
						<option value=''>- Select -</option>
						<option value='todo'>Todo</option>
						<option value='goal'>Goal</option>
					</select>
					<button
						className='add-button'
						onClick={this.addItem}>Add</button>
				</div>
			</div>
		)
	}
}

export default connect((state) => ({
	todos: state.todos,
	goals: state.goals
}))(Add)