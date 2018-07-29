import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
	handleAddTodo,
	handleDeleteTodo,
	handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {
	addItem = (e) => {
		e.preventDefault()
		this.props.dispatch(handleAddTodo(
			this.input.value,
			() => this.input.value = ''
		))
	}
	removeItem = (todo) => {
		this.props.dispatch(handleDeleteTodo(todo))
	}

	toggleItem = (id) => {
		this.props.dispatch(handleToggleTodo(id))
	}
	render() {
		return (
			<div className='block'>
				<h1 className='list-heading'>Todo List</h1>
				<div className='add-container'>
					<input
						className='add-field'
						type='text'
						placeholder='Add Todo'
						ref={(input) => this.input = input}
					/>
					<button
						className='add-button'
						onClick={this.addItem}>Add Todo</button>
				</div>
				<List
					toggle={this.toggleItem}
					items={this.props.todos}
					remove={this.removeItem}
				/>
			</div>
		)
	}
}

export default connect((state) => ({
	todos: state.todos
}))(Todos)

