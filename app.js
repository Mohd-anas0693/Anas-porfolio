// const path = require('path');

// const express = require('express');

// const app = express();


// const db = require('./database/database');

// app.set('views', path.join(__dirname, 'views'))
// app.use(express.static('public'))
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extented: false }))

// app.get('/', function (req, res) {
//     res.render('index');
// })
// app.post('/', async function (req, res) {
//     const message = {
//         name: req.body.name,
//         email:req.body.email,
//         userMessage:req.body.message
//     }
//     const insertMessage = await db.getDb().collection('message').insertOne(message);
//     console.log('Data Inserted')
//     res.redirect('/api');
// })
// db.connectToDatabase().then(
//     app.listen(3000, () => console.log(`app listen at port 3000`))
// )
const express = require('express');
const path = require('path')
const app = express();
// const bodyParser = require('body-parser')
const db = require('./database/database');
const cors = require("cors")
app.use(express.urlencoded({ extented: false }))
// const fetch = require("node-fetch");
const port = 3000
// app.use(bodyParser)
app.use(cors())
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/', async function (req, res) {
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
    app.listen(port, () => console.info(`App listening on port ${port}`))
)


