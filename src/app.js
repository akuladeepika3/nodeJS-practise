//starting point of the node application

const express = require('express')
const path = require('path')
const hbs = require('hbs')

//express single function express() to create an express application

const app = express()
const htmlFilePath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

console.log('FilePath::' + htmlFilePath)

app.use(express.static(htmlFilePath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Deepika'

    })
})

app.get('/about', (req, res) => {
    console.log('Page is Express Server')
    res.send('<h1>Page is expressServer in Browser</h1>')
    //  res.send(htmlFilePath+'\\about.html')
})

app.get('/help', (req, res) => {
    console.log('Page is Express Server HELP')
    //res.send('<h1>Page is expressServer in Browser</h1>')
    res.render('help', {
        title: 'Weather APP help',
        name: 'Deepika'
    })
})
/*
app.get('/weather/def',(req,res)=>{
    console.log('It is clear sky')
    res.send(
      [
        {
            "location":"India",
            "forecast":"Bright Sunny Day"
        }, 
        {
            "location":"Singapore",
            "forecast":"Light Drizzle throughout"
        }  
    ] 
)    
})
*/

app.get('/weatherClient', (req, res) => {
    res.send({
        title: 'Weather',
        forecast: 'It will be snowing',
        address: req.query.address,
        location: req.query.location,
    })
})

app.get('/weather', (req, res) => {
    console.log('QueryString1::' + req.query.address)
    console.log('QueryString2::' + req.query.location)
    if (!req.query.address) {
        res.render('error', {
            name: 'Deepika',
            errMSG: 'Address search term not provided'
        })
    } else if (!req.query.location) {
        res.render('error', {
            name: 'Deepika',
            errMSG: 'Location search term not provided'
        })
    } else {
        res.render('weather', {
            title: 'Weather',
            forecast: 'It will be snowing',
            address: req.query.address,
            location: req.query.location,
        })
    }
})

app.get('/weatherJSON', (req, res) => {
    console.log('QueryString1::' + req.query.address)
    console.log('QueryString2::' + req.query.location)
    if (!req.query.address) {
        res.send({
            errMSG: 'Address search term not provided'
        })
    } else if (!req.query.location) {
        res.send({
            errMSG: 'Location search term not provided'
        })
    } else {
        res.send({
            title: 'Weather',
            forecast: 'It will be snowing',
            address: req.query.address,
            location: req.query.location,
        })
    }
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        name: 'Deepika',
        errMSG: 'Help Pages notFound'
    })

})
/*
app.get('/*', (req, res) => {
    res.render('error', {
        name: 'Deepika',
        errMSG: 'Page not found'
    })

})*/

app.listen('3000', () => {
    console.log('Server is started at 3000 port')
})