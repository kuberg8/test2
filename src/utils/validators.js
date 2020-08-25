export function required(value) {
	if(value) {
		return undefined
	} else {
		return 'Обязательно для заполнения'		
	}	
}



export const minLengthCreator = (minLength) => (value) => {
	if(value && value.length < minLength) {
		return `Min symbols - ${minLength}`
	} else {
		return undefined
	}
}


export function isHaveUppercase(password) {
	/* Первый вариант решения
	if (password === password.toLowerCase()) {
		return 'Легкий пароль'
	} else {
		let letters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
		for(let key of password) {
			for(let key2 of letters) {
				if (key === key2) {
					return undefined	
				}				
			}
		}
	}
	*/
	if(password && password.search(/[A-Z]/) != -1) {
		return undefined
	}

	return 'Легкий пароль'
}


export function isHaveNumber(password) {
	if (password && password.search(/[0-9]/) != -1) {
		return undefined	
	}

	return 'Легкий пароль'	
}