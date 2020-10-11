const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../public/dist'));

app.listen(5000, () => {
    console.log('Listening on port 5000');
});

app.get('/:productId/:styleId', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
})

