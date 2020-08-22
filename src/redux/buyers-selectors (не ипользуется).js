import {createSelector} from "reselect"



function getBuyers(state) {
	return state.buyers.buyersData
}

function getSortName(state) {
	return state.buyers.sortName
}


export const getBuyersSuperSelector = createSelector(getBuyers, getSortName, (buyersData, sortName) => {
	return buyersData.sort( (a,b) => {
		if(a[sortName] > b[sortName]) {
			return 1
		} else {
			return -1
		}
	})
}) 



