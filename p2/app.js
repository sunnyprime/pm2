const express = require('express');
const app = express()
const morgan = require('morgan')
const port = 3003

app.use(morgan('dev'))

app.get('/employee-list', (req, res) =>{
    let result = {
        id:2,
        name:`Employee List ${process.env.DB_NAME}`
    }
    console.log("Employee List API",process.env.DB_NAME);
    res.status(200).json(result)

})

app.get('/employee-detail', (req, res) =>{
    let result = {
        id:2,
        name:'Employee detail'
    }
    console.log("Employee Detail API");
    res.status(200).json(result)

})


app.listen(port,()=>{
    console.log("App is listeng app http://localhost: ",port);
})