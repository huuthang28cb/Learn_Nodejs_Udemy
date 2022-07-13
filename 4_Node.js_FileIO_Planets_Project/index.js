// Import csv library
const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// Ay za, giờ tạo ra một function tìm hành tinh có sự sống
function isHabitablePlanet(planet) {
    // Tiêu chí đầu tiên có sự sống là koi_disposition
    return planet['koi_disposition'] === 'CONFIRMED' // Có giá trị dc xác nhận
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 // Lọc năng lượng mà hành tinh đó nhận dc
        && planet['koi_prad'] < 1.6; // Check bán kính hành tinh đó
}

// Đầu tiền tạo đọc luồng
fs.createReadStream('kepler_data.csv')
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
    .on('data', (data) => {
        // Gọi hàm để lấy tiêu chí
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data); // Kết quả trả về
        }
    })
    // Phản hồi sự kiện lỗi
    .on('error', (err) => {
        console.log(err);
    })
    // trình xử lý sư kiện khác nhau trên luồng đã đọc
    // Sự kiện kết thúc, k thể nhận bất cứ data nào
    .on("end", () => {
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(`${habitablePlanets.length} habitable planets found!`);
        console.log('Done!')
    });


// Nên truyền trực tiếp các tập dữ liệu lớn và tôi sẽ use stream
//parse();