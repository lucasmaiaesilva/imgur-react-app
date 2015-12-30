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

	getImage: function(id){
		Api.get('gallery/image/' + id)
			.then(function(res){
				if(this.images) {
					this.images.push(res.data);
				} else {
					this.images = [res.data];
				}

			this.triggerChange();

		}.bind(this));
				
	},

	find: function(id){
		var image = _.findWhere(this.images, {id: id});
		// first param property from object
		// second param id passed to param from a function

		if(image) {
			return image
		} else {
			this.getImage(id);
			return null;
		}

	},

	triggerChange: function(){
		this.trigger('change', this.images);
	}
});