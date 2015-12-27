var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
	getTopics: function(){
		return Api.get('topics/defaults')
			.then(function(res){
				this.topics = res.data;
			}.bind(this));
	}
});