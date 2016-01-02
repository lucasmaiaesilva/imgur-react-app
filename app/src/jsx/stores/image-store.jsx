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

	find: function(id){
		// first param property from object
		// second param id passed to param from a function
		var image = _.findWhere(this.images, {id: id});

		// the if above, exist because if the user paste the link into the 
		// navigation bar it will call the function getImage and this function
		// will make the request and if not will just take the id and return the 
		// object
		if(image) {
			return image
		} else {
			this.getImage(id);
			return null;
		}

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


	triggerChange: function(){
		this.trigger('change', this.images);
	}
});