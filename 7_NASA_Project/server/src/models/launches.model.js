// Nơi lưu trữ, có thể thêm các lần ra mắt vào bản đồ của mình
// Map trong JavaScript là một cấu trúc dữ liệu cho phép lưu trữ dữ liệu theo kiểu key-value, tương tự như object.
// Khác ở chỗ: 
// Object chỉ cho phép sử dụng String hay Symbol làm key.
// Map cho phép mọi kiểu dữ liệu (String, Number, Boolean, NaN, Object,...) có thể làm key.
const launches = new Map();

// Số chuyến bay cuối cùng được lên lịch
let latestFlighNumber = 100;

// Lưu trữ một loạt các tính năng, gí trị
const launch = {
    // Số chuyến bay
    flightNumber: 100,
    // Tên nhiệm vụ
    mission: "Kepler Exploration X",
    // Tên lửa
    rocket: "Explorer IS1",
    // Ngày ra mắt
    launchDate: new Date('December 27, 2030'), // có thể kiểm tra đây có phải ngày của tương lai hay không?
    // Số chuến bay chính thức, (Có thể hoạt động nhận dạng duy nhất...)
    target: "Kepler-442 b",
    // Danh sách khách hàng của mình
    customer: ['ZTM', 'NASA'],
    // Theo dõi một nhiệm vụ có sắp tới hay không, kiểu boolen
    upcoming: true,
    // Tất nhiên là sẽ có những chuyến bay ko như kế hoạch
    success: true,
};

launches.set(launch.flightNumber, launch) // Đặt số chuyến bay làm khóa chính

// Function exists Launch With Id
function existsLaunchWithId(launch) {
    return launches.has(launch);
}

// function get all launches
function getAllLaunches() {
    return Array.from(launches.values());
};

function addNewLaunch(launch) {
    latestFlighNumber++;
    // Giờ thì use chuyến bay mới nhất làm khóa cho lần ra mắt với
    launches.set(
        latestFlighNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['Zero to Mastery', 'NASA'],
            flightNumber: latestFlighNumber,
        })
    );
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
}