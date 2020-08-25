import React from 'react';
import tr from './terminals.module.css';
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'




function TerminalForm(props) {
	return (
		<form onSubmit={props.handleSubmit} className={tr.inputs}>
			<span className={tr.inputs_item}>
					<Field 
						placeholder="Название терминала"
						name="terminal"
						component="input"
						autocomplete="off" />

					<Field 
						placeholder="Описание" 
						name="info" 
						component="input"
						autocomplete="off" />
			</span>

			<div>
				<button>Добавить</button>
			</div>

		</form>		
	)
}


const TerminalsReduxForm = reduxForm({
	form: 'terminal'
})(TerminalForm)





function Terminals(props) {

	if(props.isAuth === false) {
		return	<Redirect to={"/login"} />
	}
		

	const onSubmit = (formData) => {
		console.log()
		if(formData.terminal && formData.info) {
			props.addTerminal(formData.terminal, formData.info)
			formData.terminal = null
			formData.info = null
		}
	}	

	let terminals = props.terminalsData.map( (item) => {
		return (
			<tr>
				<td>{item.name}</td>
				<td>{item.info}</td>
			</tr>
		)
	})


	return (
		<div className={tr.content}>
			<TerminalsReduxForm onSubmit={onSubmit} />
			<table className={tr.table} align="center" cols="2">
				{terminals}
			</table>
			<button onClick={props.deleteTerminal} className={tr.button}>Удалить</button>
		</div>
	)
}

export default Terminals;