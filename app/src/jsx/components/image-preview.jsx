var React = require('react');

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

	image: function(){
		var link = 'http://i.imgur.com/' + this.props.image.id + 'h.jpg';
		return <img src={link} />
	},

	video: function(){
		return (
			<div>
				<video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
					<source src={this.props.image.mp4} type='video/mp4'></source>
				</video>
			</div>
		);
	},

	render: function(){
		return (
			<div 
			onMouseEnter={this.handleMouseEnter}
			onMouseLeave={this.handleMouseLeave}
			>
				{this.props.image.animated && this.state.hovering ? this.video() : this.image()}
			</div>
		);
	}
});