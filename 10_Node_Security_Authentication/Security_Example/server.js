const fs = require('fs');
const path = require('path');
const https = require('https');

const express = require('express');
// Trung gian để bảo mật
const helmet = require('helmet');

const PORT = 3000;

const app = express();


// Tôi gọi phầm mềm trung gan này ở đầu trước kkhi truyền tuyến đường nào
app.use(helmet());

// 
function checkLoggedIn(req, res, next) {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
};

app.get('/auth/google', (req, res) => { });
app.get('/auth/google/calback', (req, res) => { });
app.get('/auth/logout', (req, res) => { });

app.get('/secret', checkLoggedIn, (req, res) => {
    return res.send('Your personal secret value is 42!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
    console.log(`Listen on port ${PORT}...`);
});

// ahii: openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
// video số 5 phút 8:32