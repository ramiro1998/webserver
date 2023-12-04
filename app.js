require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.port


// Handlebars
app.set('view engie', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'Ramiro Redona',
        titulo: 'Curso de Node'
    })
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/generic', (req, res) => {
    res.render('generic.hbs', {
        nombre: 'Ramiro Redona',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements.hbs', {
        nombre: 'Ramiro Redona',
        titulo: 'Curso de Node'
    })
})

app.listen(port, () => {
    console.log(`webserver listening on port ${port}`)
})