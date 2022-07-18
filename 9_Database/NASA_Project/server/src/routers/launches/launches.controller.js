const {
    getAllLaunches,
    existsLaunchWithId,
    abortLaunchById,
    scheduleNewLaunch,
} = require('../../models/launches.model');

async function httpGetAllLaunches(req, res) {
    // Có thể truy cập giá trị trong bản đồ
    // Có thể chuyển các giá trị vào mảng
    // Cái trên là tiền đề, còn giờ từ model có thể nhận dc tất cả các lần ra mắt
    return res.status(200).json(await getAllLaunches());
}

async function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }

    // Bất lỳ giá trị nào chuyển vào ngày khởi chạy sẽ là số, chuỗi ngày tháng đã được định dạng
    launch.launchDate = new Date(launch.launchDate);
    // Kiểm tra ngày có hợp lệ hay không
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    await scheduleNewLaunch(launch);
    return res.status(201).json(launch);
}

// delete
async function httpAbortLaunch(req, res) {
    // Tại nó đang ở dạng sting nên đổi qua dạng số
    const launchId = Number(req.params.id);

    const existsLaunch = await existsLaunchWithId(launchId);

    // Nếu launch không tồn Tại
    if (!existsLaunch) {
        return res.status(404).json({
            error: 'Launch not found!',
        });
    }
    // Nếu launch tồn Tại
    const aborted = await abortLaunchById(launchId);

    if (!aborted) {
        return res.status(400).json({
            error: 'Launch not aborted',
        });
    }

    return res.status(200).json({
        ok: true,
    });
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
};