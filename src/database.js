/**
 * Generates a sequence id to the products.
 */
const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

/**
 * A list of products.
 */
const products = {}

function saveProduct(product){
    if(!product.id){
        product.id = sequence.id
    }
    products[product.id] = product
    return product 
}
/**
 * It returns a product with a specific id.
 * If the id is null, returns an empty object.
 * @param {Number} id 
 */
function getProduct(id){
    return products[id] || {}
}

/**
 * Returns a list of products.
 */
function getProducts(){
    return Object.values(products)
}

/**
 * Deletes a specific product returning the same as a status.
 * @param {Number} id 
 */
function deleteProduct(id){
    const product = products[id]
    delete products[id]
    return product
}

module.exports = {
    saveProduct,
    getProduct,
    getProducts,
    deleteProduct
}
