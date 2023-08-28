const express = require('express');
const app = express()
const morgan = require('morgan')
const port = 3002

app.use(morgan('dev'))

app.get('/user-list', (req, res) =>{
    let result = {
        id:2,
        name:'User List'
    }
    console.log("User List API");
    res.status(200).json(result)

})

app.get('/user-detail', (req, res) =>{
    let result = {
        id:2,
        name:'User detail'
    }
    console.log("User Detail API");
    res.status(200).json(result)

})


app.listen(port,()=>{
    console.log("App is listeng app http://localhost: ",port);
})