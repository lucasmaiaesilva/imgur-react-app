var React	= require('react');

var Router	= require('react-router');
var Link 	= Router.Link;


module.exports = React.createClass({
	render: function(){
		return (
			<header>
				<h1> Im header </h1>
				<Link to="/">home</Link>
			</header>
		);
	}
});