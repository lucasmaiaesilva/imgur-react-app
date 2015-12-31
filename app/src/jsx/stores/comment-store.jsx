var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
	
	listenables: [Actions],

	triggerChange: function(){
		this.trigger('change', this.comment);
	},

	getImage: function(id){
		Api.get('gallery/' + id + '/comments')
			.then(function(res){
				this.comment = res.data;
				this.triggerChange();
			}.bind(this));
	}

});