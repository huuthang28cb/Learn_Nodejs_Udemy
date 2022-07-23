const ordersModel = require('../orders/orders.model');

module.exports = {
    Query: {
        orders: () => {
            return ordersModel.getAllOrders();
        }
    }
}