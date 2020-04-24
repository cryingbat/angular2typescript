var mongoose = require('mongoose')
// 表模型
var produtSchema = new mongoose.Schema({
    'productId': String,
    'salePrice': String,
    'productName': String,
    'productImageSmall': String,
    'productImageBig': String,
    'sub_title': String,
    'limit_num': String,
    'productMsg': String,
})
module.exports = mongoose.model('Product', produtSchema)