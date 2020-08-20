const ADD_TERMINALS = "ADD-TERMINALS"
const DELETE_TERMINALS = "DELETE-TERMINALS"



let initialState = {
	terminalsData:[
		{name: 'Терминал', info: 'Описание'},
		{name: 'Пример', info: 'Пример'}
	],
}


function terminalsReducer(state = initialState, action) {


	if(action.type === ADD_TERMINALS) {

		return {
			...state,
			terminalsData: [...state.terminalsData, action.newterminal],
		}
	} else if(action.type === DELETE_TERMINALS) {

		return {
			...state,
			terminalsData: [{name: 'Терминал', info: 'Описание'}]
		}
	}

	return state;
}




export function addTerminalsActionCreator (name, info) {
	return {
		type: ADD_TERMINALS,
		newterminal: {name, info}
	}
}

export function deleteTerminalsActionCreator () {
	return {
		type: DELETE_TERMINALS,
	}
}





export default terminalsReducer;