import React from 'react'
import fm from './formsControls.module.css'


export function Input({input, meta, ...props}) {

	let hasError = meta.touched && meta.error
	return(
		<div className={fm.form + " " + (hasError ? fm.error : "")}>
			{hasError ? <span>{meta.error}</span> : <span></span>}
			<div>
				<input {...input} {...props} />
			</div>
		</div>
	)
}