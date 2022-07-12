// Import http request
const { get } = require('https');

get('https://www.google.com', (res) => {
    // Write data vừa nhận được, và use 1 chuỗi mẫu để nói về data chuck
    res.on('data', (chuck) => {
        console.log(`Data chuck: ${chuck}`);
    });
    // Được gửi khi k có thêm dữ liệu nào đến từ yêu cầu, k có bất kỳ thông số nào
    res.on('end', () => {
        console.log('No more data!');
    });
});


/**
 * Lưu ý:
 * https giữ cho dữ liệu được mã hóa khi nó dc gửi giữa máy client và server of google
 */