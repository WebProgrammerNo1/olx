import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./containers/Header/Header";
import Category from "./Pages/Category/Category";
import Middle from "./containers/Middle/Middle";
import Footer from "./containers/Footer/Footer";
function App() {
	return (
		<div className='App'>
			<Header />
			<Middle />

			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>

				<Route path='/mobileapps' exact>
					<h1>MobileApps</h1>
				</Route>

				<Route path='/:category' exact>
					<Category />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
