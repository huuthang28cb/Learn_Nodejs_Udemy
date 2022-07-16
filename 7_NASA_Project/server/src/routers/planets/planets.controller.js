// import planet [] (data)
const { getAllPlanets } = require('../../models/planets.model');

// Hàm nhận tất cả các hành tinh
function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets());
}

// Xuất ra một đối tượng, cụ thẻ là hàm getAllPlanets
module.exports = {
    httpGetAllPlanets,
};