var React 			= require('react');
var ReactRouter 	= require('react-router'); // the router module
var HashHistory		= require('history/lib/createBrowserHistory');
// is an object to tells the router how we will be keeping track of what page the user is on
// any given time
const history = HashHistory();

var Router			= ReactRouter.Router; 
// is the router that will decide what content of the page will render any given time

var Route 			= ReactRouter.Route;
// is an object that we will use to configure the Router



// REQUIRE SCREENS
var Main		= require('./components/main');
var Topic 		= require('./components/topic');
var ImageDetail = require('./components/image-detail');


module.exports = (
	<Router /*history={history}*/>
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={Topic} />
			<Route path="images/:id" component={ImageDetail} />
		</Route>
	</Router>
);