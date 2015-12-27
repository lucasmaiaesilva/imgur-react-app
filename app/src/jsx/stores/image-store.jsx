var Api 		= require('../utils/api');
var Reflux 		= require('reflux');
var Actions 	= require('../actions');

module.exports = Reflux.createStore({

	listenables: [Actions],

	getImages: function(topicId){
		Api.get('topics/' + topicId)
			.then(function(res){
				this.images = res.data;
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function(){
		this.trigger('change', this.images);
	}
});