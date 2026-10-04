import express from "express";

const app = express();   // server create
const port = 3000;       // server start 

app.get('/',(req,res) => {
    console.log('API is hiting');
    
    res.send('API is hiting');
})


app.listen(port,() => {
    console.log(`server is listen on port ${port}`);
})