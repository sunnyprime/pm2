const express = require('express');
const app = express()
const morgan = require('morgan')
const port = 3004

app.use(morgan('dev'))

app.get('/fork-list', (req, res) =>{
    let result = {
        id:2,
        name:`Fork List ${process.env.DB_NAME}`
    }
    console.log("Fork List API",process.env.DB_NAME);
    res.status(200).json(result)

})

app.get('/fork-detail', (req, res) =>{
    let result = {
        id:2,
        name:'Fork detail'
    }
    console.log("Fork Detail API");
    res.status(200).json(result)

})


app.listen(port,()=>{
    console.log("App is listeng app http://localhost: ",port);
})