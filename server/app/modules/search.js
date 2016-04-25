var runner = require('/vagrant/meta_runner/metaRunner.js'),
	mapping = require('../../public/data/mapping.json');

module.exports = function(query, callback) {
	runner(query, function (docIdList) {
		var results = [];
		for (var i = 0; i < docIdList.length; i++) {
			results.push(mapping[docIdList[i]]);
		}
		callback(results);	
	}); 
};
