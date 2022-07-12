function decrypt(data) {
    return 'decrypted data';
}

// Hàm để đọc phản hồi
function read() {
    // Tất nhiên cần phải được mã hóa vì nó đã được mã hóa
    return decrypt('data');
}

module.exports={
    read,
}