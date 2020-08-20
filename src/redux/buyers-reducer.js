const SORT_BUYERS = "SORT-BUYERS"



let initialState = {
	buyersData:[
		{id: 1, name:"Виктория", averageСheck: 166, shoppingCount: 12, totalRevenues: 2000},
		{id: 2, name:"Олег", averageСheck: 250, shoppingCount: 2, totalRevenues: 500},
		{id: 3, name:"Владислав", averageСheck: 400, shoppingCount: 4, totalRevenues: 1200},
		{id: 4, name:"Ирина", averageСheck: 300, shoppingCount: 1, totalRevenues: 300},
		{id: 5, name:"Алексей", averageСheck: 214, shoppingCount: 7, totalRevenues: 1500},
		{id: 6, name:"Николай", averageСheck: 333, shoppingCount: 3, totalRevenues: 1000},
		{id: 7, name:"Том", averageСheck: 225, shoppingCount: 4, totalRevenues: 990},
		{id: 8, name:"Леонид", averageСheck: 325, shoppingCount: 2, totalRevenues: 650},
		{id: 9, name:"Боб", averageСheck: 1800, shoppingCount: 1, totalRevenues: 1800},
		{id: 10, name:"Дмитрий", averageСheck: 375, shoppingCount: 8, totalRevenues: 3000},
		{id: 11, name:"Анна", averageСheck: 300, shoppingCount: 9, totalRevenues: 2700},
		{id: 12, name:"Татьяна", averageСheck: 480, shoppingCount: 5, totalRevenues: 2400},
		{id: 13, name:"Олег", averageСheck: 454, shoppingCount: 11, totalRevenues: 5000},
		{id: 14, name:"Ольга", averageСheck: 1300, shoppingCount: 1, totalRevenues: 1300},
		{id: 15, name:"Виктор", averageСheck: 289, shoppingCount: 10, totalRevenues: 2890},
	],
	sortName: 'id'
}


function buyersReducer(state = initialState, action) {

	function sortBy(sortType) {
		let arr = [...state.buyersData]
		arr = arr.sort( (a,b) => {
			if(a[sortType] > b[sortType]) {
				return 1
			} else {
				return -1
			}
		})

		return {
			...state,
			buyersData: [...arr],
			sortName: sortType
		}		
	}


	if(action.type === SORT_BUYERS) {
		return sortBy(action.sort)
	} 

	return state;
}




export function sortBuyersActionCreator (sort) {
	return {
		type: SORT_BUYERS,
		sort
	}
}





export default buyersReducer;