const express = require('express');
const path = require('path');

const app = express();

// serve static assets normally
app.use('/public/bundle.js', express.static(path.resolve(__dirname, 'dist')));

app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(8080);
