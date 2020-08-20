import * as axios from 'axios'


const instance = axios.create({
	baseURL: 'https://avatars.githubusercontent.com/',
	responseType: "json",
})




export const authAPI = {
	getAvatar(login) {
		return instance.get(login)
	},
}


