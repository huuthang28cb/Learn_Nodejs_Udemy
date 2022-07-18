const {
    isMainThread,
    workerData,
    Worker
} = require('worker_threads');

// Kiểm tra chuỗi chính sau mỗi lần gọi

if (isMainThread) {
    console.log(`Main Thread! Process ID: ${process.pid}`);
    // Gọi một luồng worker mới bằng cách gọi new
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 3, 4, 3]
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
    // [7, 6, 2, 3].sort(): Điều này có nghĩa là sắp xếp để tận nhiều bộ xử lý CPU trên máy tính
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}