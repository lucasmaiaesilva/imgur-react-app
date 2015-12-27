var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');


module.exports = React.createClass({

	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],

	getInitialState: function(){
		return {
			images: []
		}
	},

	componentWillMount: function(){
		Actions.getImages(this.props.params.id);
	},

	onChange: function(event, imagesUpdated){
		this.setState({ images: imagesUpdated });
	},

	render: function(){
		return <h1>Topic Number {this.props.params.id}</h1>
	}
});