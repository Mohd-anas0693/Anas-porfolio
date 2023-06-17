const path = require('path');

const express = require('express');

const app = express();


const db = require('./database/database');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extented: false }))
app.use(express.static('public'))

app.get('/api', function (req, res) {
    res.render('index');
})
app.post('/api', async function (req, res) {
    const message = {
        name: req.body.name,
        email:req.body.email,
        userMessage:req.body.message
    }
    const insertMessage = await db.getDb().collection('message').insertOne(message);
    console.log('Data Inserted')
    res.redirect('/api');
})
db.connectToDatabase().then(
    app.listen(3000)

)
