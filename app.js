const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    const message = {
        status : true,
        message : "welcome to ec2 deployment"
    }
    res.status(200).json(message);
});


app.listen('3000', () => {
    console.log(`server started on port 3000`);
});