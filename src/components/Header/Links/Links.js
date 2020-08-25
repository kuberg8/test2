import React from 'react';
import  cl from './links.module.css';

import {NavLink} from 'react-router-dom';

function Links() {
  return (
    <div className={cl.links}>
        <NavLink to={location => ({ ...location, pathname: "/terminals" })} className={cl.item} activeClassName={cl.active}>
        		Терминалы
        </NavLink>
        <NavLink to={location => ({ ...location, pathname: "/buyers" })} className={cl.item} activeClassName={cl.active}>
        		Покупатели
        </NavLink>       
    </div>
  )
}


export default Links;