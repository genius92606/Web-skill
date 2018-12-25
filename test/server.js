const express = require('express')
const app=express()
const port = 11000
app.listen(port)
app.use(express.static(__dirname + '/public'))
console.log(port)
app.get("/ajax_data", function(req, res) {


    var data=   {user: req.query.fname ,name: req.query.lname}
    console.log(data);
    res.json(data)
    
})
