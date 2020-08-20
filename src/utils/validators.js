export function required(value) {
	if(value) {
		return undefined
	} else {
		return 'Обязательно для заполнения'		
	}	
}



export const minLengthCreator = (minLength) => (value) => {
	if(value.length < minLength) {
		return `Min symbols - ${minLength}`
	} else if(value === value.toLowerCase()) {
		return 'Легкий пароль'
	} else {
		let numbers = ['1','2','3','4','5','6','7','8','9','0']
		for(let key of value) {
			for(let key2 of numbers)
			if (key === key2) {
				return undefined	
			}
		}	
		return 'Легкий пароль'
	}
}