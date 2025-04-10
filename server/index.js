const express = require('express');
const path = require('path');
const app = express();

const getPicture = (req, res, next) => {
    res.json({ src: 'https://th.bing.com/th/id/OIP.Kof92hLBb6YgvjwB8Y8CHAAAAA?rs=1&pid=ImgDetMain' });
};

const getJoke = (req, res, next) => {
    res.json({ setup: 'What\'s a computer\'s favorite snack?', punchline: 'Microchips!' });
};

const rollDie = (req, res, next) => {
    let quantity = req.query.quantity ? req.query.quantity : 1;
    if (isNaN(quantity) || quantity < 0) quantity = 1;
    const rolls = [];
    for (let r = 1; r <= quantity; r++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ rolls: rolls });
};

const logRoutes = (req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date().toLocaleString()}`);
    next();
};

app.use(logRoutes);

app.get('/api/picture', getPicture);
app.get('/api/joke', getJoke);
app.get('/api/rollDie', rollDie);

app.use(express.static(path.join(__dirname, '../App/dist')));

const port = 8080;
app.listen(port, () => console.log(`listening at https://localhost:${port}`));
