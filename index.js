/**
 * Create Store:
 * Responsible for creating the actual store.
 */
function createStore (reducer) {
	/**
	 * The Store should have four parts
	 * 1. Set state
	 * 2. Get state
	 * 3. Listen to changes in state
	 * 4. Update state
	 */
	 let state // Holds the state of our entire application
	 let listeners = []

	 const getState = () => state

	 const subscribe = (listener) => {
	 	listeners.push(listener)
	 	return () => {
	 		listeners = listeners.filter((l) => l !== listerner)
	 	}
	 }

	/**
	 * Dispatch():
	 * Responsible for updating state.
	 */
	const dispatch = (action) => {
 		state = reducer(state, action)
 		listeners.forEach((listener) => listener())
	}

	 return {
	 	getState,
	 	subscribe,
	 	dispatch
	 }
}
/**
 * Reducers: todos(), goals()
 * A function that takes in the current state and an
 * action that occurred, and returns the new state.
 */
function todos (state = [], action) {
	switch(action.type) {
		case ADD_TODO :
			return state.concat([action.todo])
		case REMOVE_TODO :
			return state.filter((todo) => todo.id !== action.id)
		case TOGGLE_TODO :
			return state.map((todo) => todo.id !== action.id ? todo :
			Object.assign({}, todo, { complete: !todo.complete }))
		default :
			return state
	}
}

function goals (state = [], action) {
	switch(action.type) {
		case ADD_GOAL :
			return state.concat([action.goal])
		case REMOVE_GOAL :
			return state.filter((goal) => goal.id !== action.id)
		default :
			return state
	}
}
/**
 * Reducer Manager/ Root Reducer app():
 * Makes state and object, instead of just an array
 * Allows reducers to manage and return the state of their object,
 * instead of the entire application.
 */
function app (state = {}, action) {
	return {
		todos: todos(state.todos, action),
		goals: goals(state.goals, action),
	}
}

const store = createStore(app)

store.subscribe(() => {
	console.log('The new state is: ', store.getState())
})
