import React from 'react';
import  hd from './header.module.css';

import AvatarContainer from './Avatar/AvatarContainer.js'
import Links from "./Links/Links.js"
import {NavLink} from 'react-router-dom'

function Header(props) {
  return (
    <header className={hd.header}>
    	<div className={hd.container}>
	    		<span className={hd.logo}>TEST</span>
	    		<Links />
	    		<AvatarContainer />
    	</div>   	
    </header>
  )
}


export default Header;