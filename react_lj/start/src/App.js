import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Page1 from './routers/Page1';
import Page2 from './routers/Page2';
import Counter from './routers/Counter';
import Phonebook from './routers/Phonebook';

function App() {
	return (
		<Router>
			<header>
				<Link to="/counter">Counter</Link>
				<Link to="/phonebook">Phonebook</Link>
				<Link to="/page1">Page1</Link>
				<Link to="/page2/dlwns">Page2</Link>
			</header>
			<Switch>
				<Route path="/phonebook" component={Phonebook} />
				<Route path="/counter" component={Counter} />
				<Route path="/page1" render={(props) => (
					<Page1 history={props.history} />
				)} />
				<Route path="/page2/:name" component={Page2} />
			</Switch>
		</Router>
	);
};

export default App;