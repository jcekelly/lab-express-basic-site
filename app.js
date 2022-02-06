const express = require('express')
const app = express()
const port = 2000

// regsiter public folder to access the static asset in client

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    console.log('home route')
    res.sendFile(__dirname + `/views/home-page.html`)

})

app.get('/bio',(req, res) => {
   console.log('Bio')
   res.sendFile(__dirname + `/views/bio.html`)

})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// add content + images
// style some stuff 
