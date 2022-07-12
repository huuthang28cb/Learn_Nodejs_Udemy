// Cần 1 hàm mã hóa
function encrypt(data) {
    // Nó trả về dữ liệu được mã hóa
    return 'encrypted data';
}


// Đây là https, đó là một kết nối được mã hóa
function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
    send,
}