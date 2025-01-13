const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index.ejs')  // .ejs 확장자를 붙여도 되고 없애도 된다.
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/users', (req, res) => {
    res.render('users')
})

app.listen(port, () => {
    console.log(`Node Legacy App listening on port ${port}`)
})