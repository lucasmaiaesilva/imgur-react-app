var React = require('react');

module.exports = React.createClass({

	renderComments: function(){
		return this.props.comments.slice(0, 20).map(function(comment){
			return (
				<li key={comment.id}>
					<span> {comment.ups} </span>
					<h3>{comment.author}</h3>
					{comment.comment}
				</li>
			);
		});
	},

	render: function(){
		return (
			<ul>
				{this.renderComments()}
			</ul>
		);
	}
});