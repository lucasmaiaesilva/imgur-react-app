var React = require('react');

module.exports = React.createClass({
	
	image: function(){
		console.log(this.props);
		var link = 'http://i.imgur.com/' + this.props.image.id + 'h.jpg';
		return <img src={link} />
	},

	render: function(){
		return <div>{this.image()}</div>
	}
});