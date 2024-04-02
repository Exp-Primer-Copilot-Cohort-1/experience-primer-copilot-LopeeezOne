// Create web server
const express = require('express')
const app = express()

// Create a route for the comments
app.get('/comments', function (req, res) {
    res.send('Comments will be here!')
})

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000')
})
