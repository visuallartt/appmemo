let express = require('express');
let app = express();
let port = 3000;

app.use( express.static(__dirname + '/www' ));
app.use('/views', express.static(__dirname + '/views/'));

app.set('view engine', 'ejs')

// Code

let player = {
    name: 'John'
};

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended : false }));
app.use(bodyparser.json());

// Affichage des pages

app.post('/login', (req, res, next) => {
    console.log(req.body.pseudo);
    player.name = req.body.pseudo;
    res.redirect('/');
})

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

// app.get('/', (req, res, next) => {
//     res.send('Bonjour');
// })
// app.get('/', (req, res, next) => {
//     res.sendFile('www/index.html');
// })

app.get('/', (req, res, next) => {
    res.render('login.ejs');
})

app.get('/game', (req, res, next) => {
    res.render('index.ejs', {player: player.name});
})

app.get('/login', (req, res, next) => {
    res.render('login.ejs');
})
// app.get('/page3', (req, res, next) => {
//     res.render('page3.ejs');
// })
// app.get('/page4', (req, res, next) => {
//     res.render('page4.ejs', {personne: personne});
// })