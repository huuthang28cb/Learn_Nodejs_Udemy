// import express library
const express = require('express');
// import os library
const os = require('os'); // os: Viết tắt của hệ điều hành

const app = express();
// Hàm delay
function delay(duration) {
    // Thời gian băt đầu là thời gian hiện tại
    const startTime = Date.now();
    // Vòng lặp này sẽ kiểm tra thời gian bắt đầu gọi hàm
    while (Date.now() - startTime < duration) {
        //event loop is blocked...
    }
}

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => { }
    // [5,1,2,3,4].sort()

    // Đối với mẫu yêu cầu, tôi sử dụng để lấy các đối số dòng lệnh, mỗi quy trình để lấy id
    // id giúp tôi thấy rằng các quy trình khác nhau đang thực sự xử lý các yêu cầu khác nhau
    res.send(`Performance example ${process.pid}`);
});

// Đường này dùng để trì hoãn trong vài giây
app.get('/timer', (req, res) => {
    // delay the respones
    delay(4000);
    res.send(`Ding ding ding! ${process.pid}`);
})

console.log('Worker process started.');
// Khi người công nhân làm việc thì lắng nghe họ
app.listen(3000)


// Khi install pm2 thì chạy ở dưới terminal: pm2 start server.js
// Mấy cái này cũng nhằm một mục đích để cho máy chủ không bị quá tải bởi một file nhật ký khổng lồ