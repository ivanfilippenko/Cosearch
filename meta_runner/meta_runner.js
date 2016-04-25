var exec = require('exec');

exports.run_query = function(query, callback) {
	exec(['./run.sh', query], function(err, out, code) {
		if (err instanceof Error) {
			throw err;
		}
		
		var splitted = out.split('\n');
		var docIdList = [];
		for (var i = 0; i < splitted.length-1; i++) {
			var str = splitted[i];
			str = str.split('docid = ')[1];
			str = str.replace(')', '');
			docIdList.push(Number(str));
		}

		callback(docIdList);
	});
};
