const genericCrud = require('../service/genericCrud');
const Product = require('../models/product.model');
const fs = require("fs")


// const relations = {
//     getAll:'category',
//     get:'category'
// }


module.exports = {
    // ...genericCrud(Product,relations)
    ...genericCrud(Product)
};