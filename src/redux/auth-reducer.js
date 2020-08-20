import {authAPI} from '../api/api.js' 
import {stopSubmit} from 'redux-form'


const SET_USER = 'SET_USER'



let initialState = {
	isAuth: false,
	userAvatar: null,
}


function authReducer(state = initialState, action) {


	if(action.type === SET_USER) {		

		return {
			...state,
			...action.data,
		};

	}

	return state;
}





function setUserAC(userAvatar, isAuth) {
	return {
		type: SET_USER,
		data: {userAvatar, isAuth}
	}
}



export const loginThunkCreator = (login) => {
	return async (dispatch) => {
		let response = await authAPI.getAvatar(login)
		if(response.headers["content-length"] === "5065") {
			dispatch( stopSubmit("login", {_error: "User is not found"}) )
		} else {
			dispatch( setUserAC(response.request.responseURL, true) )
		}
	}
}



export default authReducer;