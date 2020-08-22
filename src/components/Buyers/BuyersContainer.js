import React from 'react';

import {sortBuyersActionCreator} from '../../redux/buyers-reducer.js'
import Buyers from './Buyers.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		buyersData: state.buyers.buyersData,
		//sortName: state.buyers.sortName
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sortBuyers: (sort) => { dispatch( sortBuyersActionCreator(sort) ) },		
	}
}


const BuyersContainer = connect(mapStateToProps, mapDispatchToProps)(Buyers);

export default BuyersContainer