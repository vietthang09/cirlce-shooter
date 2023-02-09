var express = require('express');
var app = express();
var http = require('http').Server(app)

const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to stop the app.');
})