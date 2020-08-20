import React, {useState, useEffect} from 'react';
import br from './Buyers.module.css';
import {Redirect} from 'react-router-dom'

import {NavLink} from 'react-router-dom';
import Paginator from '../common/paginator/Paginator.js'




function Buyers(props) {
	let [numberBuyers, setNumberBuyers] = useState('Отобразить всех')

	let [sortName, setsortName] = useState(props.sortName)
	let [buyers, setBuyers] = useState(props.buyersData)	



	useEffect( () => {
		setsortName(props.sortName)
	}, [props.sortName])

	useEffect( () => {
		setBuyers(props.buyersData)
	}, [props.buyersData])





	let userId = +props.match.params.userId
	

	if(props.isAuth === false) {
		return	<Redirect to={"/login"} />
	} else if (props.buyersData.some(item => item.id === userId)) {

		let man = props.buyersData.find(item => item.id === userId)
		return (
			<div className={br.user}>
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



	let buyersAll = props.buyersData

	let buyers10 = buyers.filter( (item, index) => index < 10)
	let buyers5 = buyers.filter( (item, index) => index > -1 && index < 5)




	let changePage = (page) => {
		if (page === 1) {
			setBuyers(buyersAll.filter( (item, index) => index >= 0 && index < 5))
		} else {
			setBuyers(buyersAll.filter( (item, index) => index >= 0 + (5 * (page - 1)) && index < 5 + (5 * (page - 1))))
		} 
	}



	let selectByName = React.createRef()
	function sortBuyers() {
		setBuyers(buyersAll)
		setsortName(selectByName.current.value)
		props.sortBuyers(selectByName.current.value)
	}


	let selectByAmount = React.createRef()
	function showBuyers() {
		setBuyers(buyersAll)
		setNumberBuyers(+selectByAmount.current.value) 
	}	




	return (
		<div className={br.content}>
			<span className={br.select}>
				<select value={props.sortName} onChange={sortBuyers} ref={selectByName}>
					<option value='id'>Сортировать</option>
					<option value='averageСheck'>Средний чек</option>
					<option value='shoppingCount'>Количество Покупок</option>
					<option value='totalRevenues'>Общая выручка</option>
					<option value='name'>По имени</option>
				</select>

				<select value={numberBuyers} onChange={showBuyers} ref={selectByAmount}>
					<option value='Отобразить всех'>Отобразить всех</option>
					<option value='5'>по 5</option>
					<option value='10'>top-10</option>
				</select>
			</span>

			<table className={br.table} align="center" cols="5">
				<tr>
					<th>ID покупателя</th>
					<th>Имя покупателя</th>
					<th>Средний чек</th>
					<th>Количество покупок</th>
					<th>Общая выручка</th>
				</tr>
				{(numberBuyers === 10 ? buyers10 :
					numberBuyers === 5 ? buyers5 :
					buyers).map( (item) => {
						return (
							<tr key={item.id}>
								<td>
							        <NavLink to={"/buyers" + item.id}>	        	
							        	{item.id}
							        </NavLink>			
								</td>
								<td>{item.name}</td>
								<td>{item.averageСheck}</td>
								<td>{item.shoppingCount}</td>
								<td>{item.totalRevenues}</td>
							</tr>
						)
					})
				}
			</table>		
			{numberBuyers === 5 ? <Paginator {...props} changePage={changePage} /> : null}	
		</div>
	)
}

export default Buyers;