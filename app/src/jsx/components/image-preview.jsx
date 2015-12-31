var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Waterfall = require('waterfall.js');

module.exports = React.createClass({

	getInitialState: function(){
		return {hovering: false}
	},
	
	handleMouseEnter: function(){
		this.setState({ hovering: true });
	},

	handleMouseLeave: function(){
		this.setState({ hovering: false });
	},

	componentWillMount: function(){
		var grid = document.querySelector('.grid');
		Waterfall(grid);
	},

	image: function(){
		var link = 'http://i.imgur.com/' + this.props.image.id + 'h.jpg';
		return (
			<div className="item">
				<img src={link} />
			</div>
		);
	},

	video: function(){
		return (
			<div className="item">
				<video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
					<source src={this.props.image.mp4} type='video/mp4'></source>
				</video>
			</div>
		);
	},

	render: function(){
		return (
			<div className="grid">
				<Link 
				to={ "images/" + this.props.image.id }
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				>
					{this.props.image.animated && this.state.hovering ? this.video() : this.image()}
				</Link>
			</div>
		);
	}
});