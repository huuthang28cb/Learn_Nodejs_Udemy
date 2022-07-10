// JS là một ngôn ngữ đồng bộ
// Một câu lệnh thực thi sau câu lệnh kia
// Tuy nhiên thì có thể ko đồng bộ khi thực thi 1 hàm gọi lại
// Khi viết trong Nodejs cho phép chức năng không đồng bộ, ngoài ra còn phụ thuộc API, chờ

// callback: "callback" là môt hàm (function), nó sẽ được gọi khi NodeJs hoàn thành một tác vụ (task) cụ thể.
// EvenLopp: Event loop hiểu nôm na là một vòng lặp vô tận, nó luôn trực chờ ở đó để quan sát bé Callback Queue và bé Call stack.
// EvenLopp: Cho phép chương trình node thực hiện nhiều việc cùng 1 lúc