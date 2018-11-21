const server = require('express');
const PORT = process.env.PORT || 9999;
const request = require('request');
const bodyParser = require('body-parser');

const app = server();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.send(`Good morning ${PORT}`);
});

app.listen(PORT,()=>{
    console.log(`Connected to PORT ${PORT}`);
});