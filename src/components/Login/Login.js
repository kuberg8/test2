import React from 'react';
import lg from './login.module.css';
import {Field, reduxForm} from 'redux-form'
import {required, minLengthCreator, isHaveUppercase, isHaveNumber} from '../../utils/validators.js'
import {Input} from '../common/FormsControls/FormsControls.js'
import {Redirect} from 'react-router-dom'


let minLength8 = minLengthCreator(8)


function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
					placeholder="Login"
					name="login"
					component={Input}
					validate={required} />
			</div>
			<div>
				<Field 
					type="password"
					placeholder="Password" 
					name="password" 
					component={Input}
					validate={[required, minLength8, isHaveUppercase, isHaveNumber]} />
			</div>
			{props.error ?
				<div className={lg.error}>
					{props.error}
				</div>
				: <span></span>}


			<div>
				<button>Login</button>
			</div>

		</form>		
	)
}


const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)






function Login(props) {
	const onSubmit = (formData) => {
		props.login(formData.login)
	}

	if(props.isAuth) {
		return	<Redirect to={"/terminals"} />
	}


	return (
		<div className={lg.login}>
			<div className={lg.reg}>
				<h2>Login</h2>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

export default Login;