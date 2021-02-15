const express = require('express');
const app = express();

app.use(express.static('pages'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/pages/templates/index.html');
});

app.listen(4141);