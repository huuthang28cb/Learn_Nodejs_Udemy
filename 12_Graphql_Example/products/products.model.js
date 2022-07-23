const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: '42.12',
        reviews: [],
    },
    {
        id: 'bluesjeans',
        description: 'Blue Jeans',
        price: '38.79',
        reviews: [],
    },
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    })
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: [],
    };
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, ratting, comment) {
    const matchedProduct = getProductById(id);
    if (matchedProduct) {
        const newProductReview = {
            ratting,
            comment,
        };
        matchedProduct.reviews.push(newProductReview);
        console.log(newProductReview)
        return newProductReview;
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
}