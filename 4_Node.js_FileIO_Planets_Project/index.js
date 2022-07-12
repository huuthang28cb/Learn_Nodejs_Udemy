// Import csv library
const parse = require('csv-parse');
const fs = require('fs');

const results = [];

// Đầu tiền tạo đọc luồng
fs.createReadStream('kepler_data.csv')
    // dữ liệu này sẽ được nhận trong data callback
    .on('data', (data) => {
        results.push(data);
    })
    // Phản hồi sự kiện lỗi
    .on('error', (err) => {
        console.log(err);
    })
    // trình xử lý sư kiện khác nhau trên luồng đã đọc
    // Sự kiện kết thúc, k thể nhận bất cứ data nào
    .on("end", () => {
        console.log(results);
        console.log('Done!')
    });


// Nên truyền trực tiếp các tập dữ liệu lớn và tôi sẽ use stream
//parse();

// Xong video số 6