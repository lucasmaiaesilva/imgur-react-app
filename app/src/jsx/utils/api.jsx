var Fetch 	= require('whatwg-fetch');
// lib to make requests on api without jquery

var rootUrl = 'https://api.imgur.com/3/';
var apiKey 	= 'bb99f8aecfe9a4c';


module.exports = {
	get: function(url){
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		});
	}
};

// when you need to get data from API, just do this on code
// var Api = require('./utils/api');
// Api.get('images');