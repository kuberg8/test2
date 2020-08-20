import React from 'react';

import Avatar from './Avatar.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		avatar: state.auth.userAvatar,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
	}
}


const AvatarContainer = connect(mapStateToProps, mapDispatchToProps)(Avatar);


export default AvatarContainer