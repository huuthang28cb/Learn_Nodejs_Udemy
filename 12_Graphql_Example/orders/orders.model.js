const orders = [
    {
        date: '2020-09-08',
        subtotal: 90.20,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old Red Shoe',
                    price: 45.11,
                },
                quantity: 2,
            }
        ]
    }
]

function getAllOrders() {
    console.log(orders)
    return orders;
}

module.exports = {
    getAllOrders,
}