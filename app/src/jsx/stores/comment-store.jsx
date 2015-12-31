var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
	
	listenables: [Actions],

	triggerChange: function(){
		this.trigger('change', this.comment);
	},


	// the function below have this name because its the same name of the
	// other function called on the image-detail component on the cycle
	// componentWillMount, this let us abble to call the both functions
	// with one single write
	getImage: function(id){
		Api.get('gallery/' + id + '/comments')
			.then(function(res){
				this.comment = res.data;
				this.triggerChange();
			}.bind(this));
	}

});