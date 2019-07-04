const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const todoRoute = require('./routes/todo');
const filePath = path.join(__dirname , 'views');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api/todo',todoRoute);
app.use(express.static('views'));

app.get('/',(req,res)=>{
    res.sendFile(filePath + '/index.html');
});

app.listen(port,()=>{
    console.log('Listening at port 3000');
});