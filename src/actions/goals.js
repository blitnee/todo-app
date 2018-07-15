import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal (goal) {
	return {
		type: ADD_GOAL,
		goal,
	}
}

function removeGoal (id) {
	return {
		type: REMOVE_GOAL,
		id,
	}
}

export function handleAddGoal (name, cb) {
	return (dispatch) => {
		return API.saveGoal(name)
			.then((goal) => {
				dispatch(addGoal(goal))
				cb()
			})
			.catch(() => {
				alert('An error occured. Try again.')
		})
	}
}

export function handleDeleteGoal (goal) {
	return (dispatch) => {
		dispatch(removeGoal(goal.id))

		return API.deleteTodo(goal.id)
			.catch(() => {
				dispatch(addGoal(goal))
				alert('An error occurred. Try again.')
			})
	}
}