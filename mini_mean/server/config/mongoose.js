let mongoose = require('mongoose');
let path = require('path');
let fs = require('fs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mini_mean_first_attempt');

let models_path = path.join(__dirname, '../models/');

fs.readdirSync(models_path).forEach(function(file){
	if (file.indexOf(".js") >= 0){
		require(path.join(models_path, file));
	}
})
