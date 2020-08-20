import React from 'react';

import {sortBuyersActionCreator} from '../../redux/buyers-reducer.js'
import Buyers from './Buyers.js'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		buyersData: state.buyers.buyersData,
		sortName: state.buyers.sortName
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sortBuyers: (sort) => { dispatch( sortBuyersActionCreator(sort) ) },		
	}
}


const BuyersContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Buyers);

export default BuyersContainer