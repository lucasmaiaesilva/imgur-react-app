var React 		= require('react');
var Reflux 		= require('reflux');
var TopicStore 	= require('../stores/topic-store');
var Actions 	= require('../actions');
var ReactRouter = require('react-router');
var Link 		= ReactRouter.Link;

module.exports = React.createClass({

	// this mixin say, this component that we'll writing right now needs to listen to
	// any event that was trigger to topicStore 
	// the handleChange is a function that send the data to the other function
	// trigger on the topicStore component
	mixins: [
		Reflux.listenTo(TopicStore, 'handleChange')
	],
	
	getInitialState: function(){
		return { topics: [] };
	},

	componentWillMount: function(){
		Actions.getTopics();
	},

	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return (
			<Link to={"/topics/" + topic.id} key={topic.id}> 
					<h4>{topic.name}</h4>
					<p>{topic.description}</p>
				</Link>
			);
		});
	},

	handleChange: function(event, updatedTopics ){
		this.setState({ topics: updatedTopics })
	},

	render: function(){
		return ( 
			<div>
				<h2>Topics List</h2>
				{this.renderTopics()}
			</div>
		);

	}
});