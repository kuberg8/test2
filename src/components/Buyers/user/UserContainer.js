import React from 'react';

import {sortBuyersActionCreator} from '../../../redux/buyers-reducer.js'
import User from './User.js'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		buyersData: state.buyers.buyersData,
	}
}




const UserContainer = compose(connect(mapStateToProps), withRouter)(User);

export default UserContainer