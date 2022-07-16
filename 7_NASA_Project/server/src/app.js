const path = require('path');
const express = require('express');
// Đây là 1 trong các chính sách bảo mật, nếu k có thì sẽ bị chặn các nguồn gốc chéo
const cors = require('cors');
// morgan cho phép ghi nhật ký những lúc requests, ghi những gì vào máy chủ
const morgan = require('morgan');

const planetRouter = require('./routers/planets/planets.router');
const launchesRouter = require('./routers/launches/launches.router');

const app = express();

app.use(cors({
    // Để an toàn thì chỉ cho phép truy cập dữ liệu từ port 3000. Đây là port của tôi
    origin: 'http://localhost:3000',
}));
// Để dưới cor
app.use(morgan('combined'))

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/planets',planetRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;