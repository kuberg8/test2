import React from 'react';

import {addTerminalsActionCreator} from '../../redux/terminals-reducer.js'
import {deleteTerminalsActionCreator} from '../../redux/terminals-reducer.js'
import Terminals from './Terminals.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		terminalsData: state.terminals.terminalsData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addTerminal: (name, info) => { dispatch( addTerminalsActionCreator(name, info) ) },
		deleteTerminal: () => { dispatch( deleteTerminalsActionCreator() ) },
	}
}


const TerminalsContainer = connect(mapStateToProps, mapDispatchToProps)(Terminals);


export default TerminalsContainer