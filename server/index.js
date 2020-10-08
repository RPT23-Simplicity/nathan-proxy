const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public/dist'));

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
