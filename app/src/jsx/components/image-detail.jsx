var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var Actions = require('../actions');
var CommentBox = require('./comment-box');

module.exports = React.createClass({

	mixins: [
		Reflux.listenTo(ImageStore, 'onChange'),
		Reflux.listenTo(CommentStore, 'onChange')
	],

	getInitialState: function(){
		return {
			image: null,
			comment: null
		}
	},

	componentWillMount: function(){
		Actions.getImage(this.props.params.id);
	},

	onChange: function(){
		this.setState({
			image: ImageStore.find(this.props.params.id),
			comments: CommentStore.comment
		});

	},

	renderComments: function(){
		if(!this.state.comments){
			return null
		} 
		return <CommentBox comments={this.state.comments} />
	},

	renderContent: function() {
		return (
			<div>
				<h4>{this.state.image.title}</h4>
				<div>
					{this.renderImage()}
				</div>
				<div>
					<p>{this.state.image.description}</p>
				</div>
				<div>
					<h3>Comments</h3>
					{this.renderComments()}
				</div>
			</div>
		);
	},

	renderImage: function() {
		if(this.state.image.animated){
			return (
				<video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
					<source src={this.state.image.mp4} type="video/mp4"></source>
				</video>
			);

		} else {
			return <img src={this.state.image.link} />
		}
	},

	render: function(){
		console.log(this.state.image);
		return (
			<div>
				{ this.state.image ? this.renderContent() : null }
			</div>
		);
	}
});