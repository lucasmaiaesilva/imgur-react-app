var React = require('react');

module.exports = React.createClass({
	render: function(){
		console.log(this.props.comments);
		return (
			<div>
				I am comment box
			</div>
		);
	}
});