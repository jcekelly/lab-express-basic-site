const express = require('express')
const app = express()
const port = 2000

// regsiter public folder to access the static asset in client

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    console.log('home route')
    res.sendFile(__dirname + `/views/home-page.html`)

})

app.get('/info',(req, res) => {
   console.log('Info  page')
   res.sendFile(__dirname + `/views/info-page.html`)

})

app.get('/about',(req,res) => {
    res.send('<h1>this is the about page</h1>')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// add content + images
// style some stuff 
