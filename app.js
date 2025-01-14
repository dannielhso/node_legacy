const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
require('dotenv').config();
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views')
// static file serving
app.use(express.static(__dirname+'/public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse JSON
app.use(bodyParser.json())
// MySQL Connection
const connection = mysql.createConnection({ // 민감 정보 -> push 찍으면 안된다.
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    insecureAuth: true,
}); // 어떻게 숨길 수 있을까? -> dotenv를 통해서 우회접근하고 .env는 추적 비활성화 한다.

app.get('/', (req, res) => {
    res.render('index.ejs')  // .ejs 확장자를 붙여도 되고 없애도 된다.
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/users', (req, res) => {
    res.render('users')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/api/contact', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const memo = req.body.memo;

    const data = `${name}, ${phone}, ${email}, ${memo}`

    res.send(data)
})

app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})