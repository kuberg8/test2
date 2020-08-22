import React from 'react';
import us from './user.module.css';

import NotFound from '../../NotFound/NotFound.js'
import {Redirect} from 'react-router-dom'



function User(props) {


	let userId = +props.match.params.userId
	

	if(props.isAuth === false) {
		return	<Redirect to={"/login"} />
	} else if (props.buyersData.some(item => item.id === userId)) {

		let man = props.buyersData.find(item => item.id === userId)
		return (
			<div className={us.user}>
				<table cols='2' align='center'>
					<tr>
						<td>ID</td><td>{man.id}</td>
					</tr>
					<tr>
						<td>Name</td><td>{man.name}</td>
					</tr>
					<tr>
						<td>Средний чек</td><td>{man.averageСheck}</td>
					</tr>
					<tr>
						<td>Количество покупок</td><td>{man.shoppingCount}</td>
					</tr>
					<tr>
						<td>Общая выручка</td><td>{man.totalRevenues}</td>
					</tr>
				</table>
			</div>			
		)
	}	



	return (
		<NotFound />
	)
}

export default User;