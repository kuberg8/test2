const ADD_TERMINALS = "ADD-TERMINALS"



let initialState = {
	terminals:[],
}


function dataReducer(state = initialState, action) {


	if(action.type === ADD_TERMINALS) {

		return {
			...state,
			dataInfo: [...state.dataInfo, action.terminals],
		}
	} 

	return state;
}




export function addTerminalsActionCreator (terminals) {
	return {
		type: ADD_TERMINALS,
		terminals
	}
}





export default dataReducer;