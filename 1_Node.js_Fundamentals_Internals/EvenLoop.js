// Vòng lợp này kt xem thử có thoát ra hay không
// Vì vậy vòng lặp này kt mã đã thực thi xong chưa
while (!shouldExit) {
    // Xử lý tất cả các sự kiện, all function
    // Nếu k có sự kiện nào, hàm ở đây sẽ đợi cho đến khi có 1 sự kiện
    processEvents();
}

// Vòng lặp này run trong khi xử lý all events trong program for you

/**
 * 1, Vòng lặp event loop này xử lý các sự kiện như thế nào?
 * 2, Các sự kiện quy trình của node có chức năng gì?
 * 3, Và nó dc xử lý những loại sự kiện nào?
 */

/**
 * Có 4 giai đoạn của event loop, mỗi giai đoạn thực hiện hành động khác nhau
 * 1, Timers: setTimeout, setInterval, setImmediate
 * 2, I/O callbacks
 * 3, Setlmediate
 * 4, Close callbacks
 * => Mỗi giai đoạn này thì có hàng đợi gọi lại của riêng chúng
 */

/**
 * Khi Vòng lặp đó khởi động, các lệnh gọi lại đã được chuyển vào thời gian chờ và
 * khoảng các thời gian đã đặt, và kiểm tra có function hay ko, sau đó đi qua bước 2.
 * Ở đây, có tất cả các thứ hoạt động trên mạng và tệp. Vì vậy, nếu code đọc xong 1 tệp
 * thì sẽ dc đẩy lên trên. Sau đó chuyển qua bươc 3. Đây là 1 bộ đếm time special(Thực thi luôn)
 * Sau khi hoàn tất I/O chạy ngay lập tức. Chuyển qua bước 4, điều này dành cho khi đóng 1 tệp, một
 * kết nối mạng và có 1 lệnh gọi lại khi kết nối đó bị đóng. Sau đó vòng lặp này đi qua danh sách
 * các function khác nhau cần thực thi
 */

// Event loop đảm bảo all function tạo nên chương trình k đồng bộ của bạn cuối cùng
// Nó thường kết hợp với V8 và Labov đưa lên máy chủ,...