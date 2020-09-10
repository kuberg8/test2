import React, {useState, useEffect} from 'react';
import br from './Buyers.module.css';
import {Redirect} from 'react-router-dom'

import {NavLink} from 'react-router-dom';
import Paginator from '../common/paginator/Paginator.js'




function Buyers(props) {
	let [amountBuyers, setAmountBuyers] = useState('Отобразить всех')
	let [sortName, setSortName] = useState('id')  // props.sortName
	let [buyers, setBuyers] = useState(props.buyersData)	
	let [portionNumber, setPortionNumber] = useState(1)




	/*
	useEffect( () => {
		setSortName(props.sortName)
	}, [props.sortName])
	*/

	useEffect( () => {
		setBuyers(props.buyersData)
	}, [props.buyersData])




	

	if(props.isAuth === false) {
		return	<Redirect to={"/login"} />
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




	function sortBuyers(e) {
		setPortionNumber(1)
		setSortName(e.currentTarget.value) // если брать sortName из props, то здесь не надо setSortName, так как есть useEffect
		props.sortBuyers(e.currentTarget.value)
	}


	
	function showBuyers(e) {
		setBuyers(buyersAll)
		setPortionNumber(1)
		setAmountBuyers(+e.currentTarget.value) 
	}	




	return (
		<div className={br.content}>
			<span className={br.select}>
				<select value={sortName} onChange={sortBuyers}>
					<option value='id'>Сортировать</option>
					<option value='averageСheck'>Средний чек</option>
					<option value='shoppingCount'>Количество Покупок</option>
					<option value='totalRevenues'>Общая выручка</option>
					<option value='name'>По имени</option>
				</select>

				<select value={amountBuyers} onChange={showBuyers}>
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
				{(amountBuyers === 10 ? buyers10 :
					amountBuyers === 5 ? buyers5 :
					buyers).map( (item) => {
						return (
							<tr key={item.id}>
								<td>
							        <NavLink to={"/buyers/" + item.id}>	        	
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
			{amountBuyers === 5 ? <Paginator 
				{...props} 
				changePage={changePage} 
				portionNumber={portionNumber}
				setPortionNumber={setPortionNumber} /> : null}	
		</div>
	)
}

export default Buyers;