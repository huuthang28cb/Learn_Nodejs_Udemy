/** 
 * CORS là một cơ chế cho phép nhiều tài nguyên khác nhau (fonts, Javascript, v.v…) 
 * của một trang web có thể được truy vấn từ domain khác với domain của trang đó
 * CORS là viết tắt của từ Cross-origin resource sharing.
*/

/** Tại sao chúng ta cần CORS
 * CORS được sinh ra là vì same-origin policy
 * Chính sách này ngăn chặn việc truy cập tài nguyên của các domain khác một cách vô tội vạ.
 * vd: ếu không có same-origin policy, trang web độc hại kia có thể thoải mái lấy 
 * dữ liệu của bạn và bất cứ điều gì chúng muốn.
 * Same-origin policy chính là để ngăn chặn những kịch bản như trên để bảo vệ người dùng,
 * -> CORS sử dụng các HTTP header để “thông báo” cho trình duyệt rằng, một ứng dụng web 
 * chạy ở origin này (thường là domain này) có thể truy cập được các tài nguyên ở origin khác (domain khác).
 */