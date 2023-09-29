require('dotenv').config();
const express=require('express');
const app=express();

app.get('/', (req,res) => {
    res.json({mssg: 'welcome to the app'});
});

app.listen(process.env.PORT,() => {
    console.log('listening port!', process.env.PORT);
});

