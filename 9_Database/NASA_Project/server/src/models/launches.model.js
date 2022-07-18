const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');
// Nơi lưu trữ, có thể thêm các lần ra mắt vào bản đồ của mình
// Map trong JavaScript là một cấu trúc dữ liệu cho phép lưu trữ dữ liệu theo kiểu key-value, tương tự như object.
// Khác ở chỗ: 
// Object chỉ cho phép sử dụng String hay Symbol làm key.
// Map cho phép mọi kiểu dữ liệu (String, Number, Boolean, NaN, Object,...) có thể làm key.
const launches = new Map();

const DEFAULT_FIGHT_NUMBER = 100;

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
    customers: ['ZTM', 'NASA'],
    // Theo dõi một nhiệm vụ có sắp tới hay không, kiểu boolen
    upcoming: true,
    // Tất nhiên là sẽ có những chuyến bay ko như kế hoạch
    success: true,
};

saveLaunch(launch);

//launches.set(launch.flightNumber, launch) // Đặt số chuyến bay làm khóa chính

// Function exists Launch With Id
async function existsLaunchWithId(launchId) {
    return await launchesDatabase.findOne({
        flightNumber: launchId,
    });
}

// Function lấy số chuyến bay mới nhau
async function getLatestFlightNumber() {
    const latestLaunch = await launchesDatabase
        .findOne({}) // Chỉ muốn tìm một tài liệu có số chuyến bay mới nhất
        .sort("-flightNumber"); // chuyến bay trả về là một chuyến bay mới nhất

    if (!latestLaunch) {
        return DEFAULT_FIGHT_NUMBER;
    }
    return latestLaunch.flightNumber;
}

// function get all launches
async function getAllLaunches() {
    //return Array.from(launches.values());
    return await launchesDatabase
        // {}: là muốn tìm tất cả đó
        .find({}, { '_id': 0, '__v': 0 }); // Bỏ mấy cái đó
};

// save launch into db
async function saveLaunch(launch) {

    const planet = await planets.findOne({
        keplerName: launch.target,
    });
    if (!planet) {
        throw new Error('No matching planet found');
    }
    // Chú ý: nếu sử dụng updateOne sẽ có $setOnInsert điều đó bảo mật ko tốt, nên chỉ đưa cho khách hàng những thông tin cần thiết thôi
    await launchesDatabase.findOneAndUpdate({ // Tìm một cái cái và cập nhật cái này
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
}

async function scheduleNewLaunch(launch) {

    const newFlightNumber = await getLatestFlightNumber() + 1;

    const newLunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Zero to Mastery', 'NASA'],
        flightNumber: newFlightNumber,
    });

    await saveLaunch(newLunch);
}

// function addNewLaunch(launch) {
//     latestFlighNumber++;
//     // Giờ thì use chuyến bay mới nhất làm khóa cho lần ra mắt với
//     launches.set(
//         latestFlighNumber,
//         Object.assign(launch, {
//             success: true,
//             upcoming: true,
//             customer: ['Zero to Mastery', 'NASA'],
//             flightNumber: latestFlighNumber,
//         })
//     );
// }

async function abortLaunchById(launchId) {
    const aborted = await launchesDatabase.updateOne({
        flightNumber: launchId,
    }, {
        upcoming: false,
        success: false,
    });
    console.log(aborted);
    return aborted.matchedCount === 1;
    // const aborted = launches.get(launchId);
    // aborted.upcoming = false;
    // aborted.success = false;
    // return aborted;
}

module.exports = {
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
}