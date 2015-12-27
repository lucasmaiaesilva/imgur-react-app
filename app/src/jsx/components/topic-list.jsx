var React 		= require('react');
var TopicStore 	= require('../stores/topic-store');

module.exports = React.createClass({
	
	getInitialState: function(){
		return { topics: [] };
	},

	componentWillMount: function(){
		TopicStore.getTopics()
			.then(function(){
				// we have successfully fetched topics
				// topics are available on TopicStore.topics
				// after a promisse we know that topics are ok to use
				this.setState({
					topics: TopicStore.topics
				});

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