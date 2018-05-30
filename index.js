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
const store = createStore(app)

store.subscribe(() => {
	console.log('The new state is: ', store.getState())
})
