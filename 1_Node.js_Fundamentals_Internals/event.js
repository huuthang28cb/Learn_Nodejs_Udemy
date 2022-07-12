// import events
const EventEmitter = require('events');
// Nói với họ rằng, chúng tôi có 1 người nổi tiếng
const SonTungMTP = new EventEmitter();

// Sẽ có một mã đăng ký SonTungMTP for Observer 1
SonTungMTP.on('the new', (result) => { // Tên sự kiện
    // Người hâm mộ này sẽ gửi cho SonTungMTP
    if (result === 'song') {
        console.log("Congratulations! SonTungMTP, the new song for you is the best!")
    }
});

// Sẽ có một mã đăng ký SonTungMTP for Observer 2
SonTungMTP.on('the new', (result) => { // Tên sự kiện
    // Người hâm mộ này sẽ gửi cho SonTungMTP
    if (result == 'image') {
        console.log("I feel very happy. He is very hanesome!")
    }
});

// processEvents
// Đây là sự kiện thoát chương trình
// Mã 0 là thực hiện bình thường thành công
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})

SonTungMTP.emit('the new', "song");
SonTungMTP.emit('the new', "image");