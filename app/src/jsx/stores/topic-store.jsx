var Api 		= require('../utils/api');
var Reflux 		= require('reflux');
var Actions 	= require('../actions');

module.exports = Reflux.createStore({

	// By using this line any methods with the same name of methods on this 
	// component we can simply call on the Actions module
	// just a proxy for the methods
	listenables: [Actions],

	getTopics: function(){
		return Api.get('topics/defaults')
			.then(function(res){
				this.topics = res.data;
				this.triggerChange();
			}.bind(this));
	},
	triggerChange: function(){

		this.trigger('change', this.topics);
		// this.trigget is a function used by reflux to put togeter events and data
		// the first parameter is a event that I want to use
		// and the second parameter is the data itself
	}
});