const express = require("express");

const app = express();
const port = 8080;

// Get Route
app.get("/", (req, res)=>{
    res.send("<h1>Hello from Node App v1</h1>");
});

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    } else {
        console.log(`Server Running on port ${port}`)
    }
})