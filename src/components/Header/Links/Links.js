import React from 'react';
import  cl from './links.module.css';

import {NavLink} from 'react-router-dom';

function Links() {
  return (
    <div className={cl.links}>
        <NavLink to="terminals" activeClassName={cl.active}>
        	<div className={cl.item}>
        		Терминалы
        	</div>
        </NavLink>
        <NavLink to="buyers" activeClassName={cl.active}>
        	<div className={cl.item}>
        		Покупатели
        	</div>
        </NavLink>       
    </div>
  )
}


export default Links;