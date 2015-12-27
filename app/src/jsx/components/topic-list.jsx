var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
	
	getInitialState: function(){
		return { topics: [] };
	},

	componentWillMount: function(){
		Api.get('topics/defaults')
		 .then(function(res){
		 	this.setState({
		 		topics: res.data
		 	})
		 }.bind(this));
	},

	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return <li> {topic.description} </li>
		});
	},

	render: function(){
		return ( 
			<div>
				Topics List
				{this.renderTopics()}
			</div>
		);

	}
});