import React from 'react';
import './App.css';

import store from './redux/redux-store.js'
import {Provider} from 'react-redux'

import {Route, Switch} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"


import HeaderContainer from './components/Header/HeaderContainer.js'
import LoginContainer from './components/Login/LoginContainer.js'
import TerminalsContainer from './components/Terminals/TerminalsContainer.js'
import BuyersContainer from './components/Buyers/BuyersContainer.js'
import NotFound from './components/NotFound/NotFound.js'


function App() {
  return (
  	<Provider store={store}>
  		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div>
			  <HeaderContainer />

			  	<span className='content'>
				    <Switch>
						<Route exact path="/terminals" render={ () => <TerminalsContainer />} />

						<Route exact path="/buyers:userId?" render={ () => <BuyersContainer />} />

						<Route exact path="/login" render={ () => <LoginContainer />} />

					    <Route exact path="/" render={ () => <LoginContainer />} />

					    <Route exact path="*" render={ () => <NotFound />} />
				    </Switch>
				</span>
			    <footer>Copyright © 2020</footer>
			</div>
		</BrowserRouter>
	</Provider>
  );
}

export default App;
