import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
	handleDeleteTodo,
	handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {
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

