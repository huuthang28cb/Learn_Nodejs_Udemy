// Import csv library
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

// import mongo scheme
const planets = require('./planets.mongo');

// Ay za, giờ tạo ra một function tìm hành tinh có sự sống
function isHabitablePlanet(planet) {
    // Tiêu chí đầu tiên có sự sống là koi_disposition
    return planet['koi_disposition'] === 'CONFIRMED' // Có giá trị dc xác nhận
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 // Lọc năng lượng mà hành tinh đó nhận dc
        && planet['koi_prad'] < 1.6; // Check bán kính hành tinh đó
}

// Tạo một lời hứa
// const promise = new Promise((resolve, reject)=>{
//     resolve(42); // giả sử giải quyết 42 thì 42 sẽ được chuyển
// });
// promise.then((result) => {

// });
// const result = await promise; // Cái này sẽ chặn để giải quyết lời hứa trước
// console.log(result);


// Hàm gọi dữ liệu hành tinh
function loadPlanetsData() {
    // Đầu tiền tạo đọc luồng
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            /**
             * Kết nối luồng có thể đọc với đích của luồng có thể đọc được
             * Luồng này lấy dữ liệu thay vì cung cung cấp data
             * Tệp csv này là nguồn, đây là hàm phân tích cú pháp
             * 
             */
            // Giống như cái ống để kết nối (ống nước kk) truyền vào parse. kq dc 1 loạt hàng có thể đọc dễ dàng
            .pipe(parse({
                // Coi các dòng bắt đầu bằng dấu # là các nhận xét
                comment: '#',
                // Các cột được đặt thành true
                columns: true,
            }))
            // dữ liệu này sẽ được nhận trong data callback
            .on('data', async (data) => {
                // Gọi hàm để lấy tiêu chí
                if (isHabitablePlanet(data)) {
                    // TODO: Replace below create with insert + update = upsert
                    // Tìm tất cả cách hành tinh có tên khớp với hành tinh hiện tại, có nghĩa là chỉ chèn hành tinh mà chưa tồn tại
                    savePlanet(data);
                }
            })
            // Phản hồi sự kiện lỗi
            .on('error', (err) => {
                console.log(err);
                reject(err); // Tùy ý chuyển lỗi mà tôi nhận được
            })
            // trình xử lý sư kiện khác nhau trên luồng đã đọc
            // Sự kiện kết thúc, k thể nhận bất cứ data nào
            .on("end", async () => {
                const countPlanetsFound = (await getAllPlanets()).length;
                console.log(`${countPlanetsFound} habitable planets found!`);
                resolve(); // Gọi hàm để giải quyết
            });
    });
}

async function getAllPlanets() {
    return await planets.find({});
};

async function savePlanet(planet) {
    console.log(planet.kepler_name)
    try {
        
        await planets.updateOne({
            keplerName: planet.kepler_name,
        }, {
            keplerName: planet.kepler_name,
        }, {
            upsert: true,
            strict: true
        });
    } catch (err) {
        console.log(`Could not save planet ${err}`);
    }
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
};
