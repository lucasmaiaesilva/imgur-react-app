var React 		= require('react');
var Reflux 		= require('reflux');
var TopicStore 	= require('../stores/topic-store');

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
		TopicStore.getTopics()
	},

	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return <li> {topic.description} </li>
		});
	},

	handleChange: function(event, updatedTopics ){
		this.setState({ topics: updatedTopics })
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