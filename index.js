const express = require("express");
const app = express();
const router = require('../taskApi/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({
    limit: '500mb',
    extended: true,
    parameterLimit: 50000
}));
const port = 3000;
app.use(router);

app.get("/" , (req , res) =>{
    res.send("ahmad")
})




app.listen(port , ()=>  console.log('api run'));