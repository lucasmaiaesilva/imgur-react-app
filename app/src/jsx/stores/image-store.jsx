var Api 		= require('../utils/api');
var Reflux 		= require('reflux');
var Actions 	= require('../actions');
var _ 			= require('lodash');

module.exports = Reflux.createStore({

	listenables: [Actions],

	getImages: function(topicId){
		Api.get('topics/' + topicId)
			.then(function(res){
				this.images = _.reject(res.data, function(image){
					return image.is_album
				});

				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function(){
		this.trigger('change', this.images);
	}
});