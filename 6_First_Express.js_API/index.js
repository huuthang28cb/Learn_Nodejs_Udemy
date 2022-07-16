const express = require('express');

const app = express();

const POST = 3000;

app.get('/', (req, res) => {
    res.send("Hello Vo Huu Thang")
})

app.get('/message', (req, res) => {
    res.send("<ul><li>Hello</li><li>Thang</li><li>Ahihi</li></ul>")
})

app.get('/message', (req, res) => {
    res.send("Updating message...")
})


app.listen(POST, () => {
    console.log(`Listen at port: ${POST}`);
})