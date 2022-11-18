const express = require('express'); //import express
const handle = require('./handlers');

const app = express(); // call app
const port = 3000;//any number above 1000


app.get('/', (req, res) => res.send('hello world'));


app.use(handle.notFound);

 
app.use(handle.error);

app.listen(port, console.log(`Server started on port ${port}`));
