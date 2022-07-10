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