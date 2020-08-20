import React from 'react';
import av from './avatar.module.css';





function Avatar(props) {


	return (
		<div className={av.avatar}>
			<img src={props.avatar} />
		</div>
	)
}

export default Avatar;