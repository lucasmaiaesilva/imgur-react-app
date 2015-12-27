var React 	= require('react');
var Header 	= require('./header');
var Topics 	= require('./topic-list');

module.exports = React.createClass({
	content: function(){
		if(this.props.children)
			return this.props.children;
		else
			return <Topics />

	},
	render: function(){
		return (
			<div>
				<Header />
				{this.content()}
			</div>
		);
	}
});