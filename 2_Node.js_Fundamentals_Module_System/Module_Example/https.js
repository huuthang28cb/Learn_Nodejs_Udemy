const request = require('./request');
const response = require('./response');

// Tạo một hàm request sẽ lấy 1 URL mà tôi yêu cầu\
function MakeRequest(url, data) {
    request.send(url, data);
    return response.read();
}

const responseData = MakeRequest('https://google.com', 'hello');
console.log(responseData);