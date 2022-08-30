const express = require("express");

const app = express();
const port = 8080;

// Get Route for Root 
app.get("/", (req, res)=>{
    res.send("<h1>Hello from Node App v1</h1>");
});

// Listening to requests on PORT 8080
app.listen(port, (err)=>{
    if(err){
        console.log(err)
    } else {
        console.log(`Server Running on port ${port}`)
    }
})