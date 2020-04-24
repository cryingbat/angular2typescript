let express = require('express');
let router = express.Router()
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
let Good = require('../models/product')
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', (req,res, next) => {
    res.json({
        status: '200',
        result: [{
            text: 1,
            ceshi:2
        }],
        message: '获取成功'
    })
})
// 查找所有商品列表  ok
router.get('/getProduct', (req, res, next)=> {
    Good.find((err, doc)=> {
        if(err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        }else{
            if(doc){
                res.json({
                    status: '200',
                    result: doc,
                    message: '获取成功'
                })
            }
        }
    })
})
//查询单个产品 ok
router.post('/OneProduct',multipartMiddleware, (req,res)=> {
    console.log(req.body)
    let params = {
        _id: req.body.id
    }
    Good.findOne(params, (err, doc)=> {
        if(!err) {
            res.json({
                status:'200',
                message: '成功',
                result: doc,
            })
        }else{
            res.json({
                status:'1',
                message: err.message,
                result: '',
            })
        }
    })
})
//增加商品  ok
router.post('/addProduct',multipartMiddleware, (req, res) => {
    let params = {
        'productId': req.body.productId,
        'salePrice': req.body.salePrice,
        'productName': req.body.productName,
        'productImageSmall': req.body.productImageSmall,
        'productImageBig': req.body.productImageBig,
        'sub_title': req.body.sub_title,
        'limit_num': req.body.limit_num,
        'productMsg': req.body.productMsg,
    }
    Good.create(params, (err,doc)=> {
        if(err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        }else{
            if(doc){
                res.json({
                    status: '200',
                    msg: '新增成功',
                    result: ''
                })
            }
        } 
    })
})
//删除单个商品  ok
router.post('/deleteProduct',multipartMiddleware,(req, res) => {
    let params = {
        _id: req.body.id
    }
    Good.find(params, (err,doc)=> {
        if(err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        }else {
            if(doc) {
                Good.remove(params,(err)=> {
                    if(err) {
                        res.json({
                            status: '1',
                            msg: err.message,
                            result: ''
                        })
                    } else {
                        Good.find((err, doc)=> {
                            if(err) {
                                res.json({
                                    status: '1',
                                    msg: err.message,
                                    result: ''
                                })
                            }else{
                                if(doc){
                                    res.json({
                                        status: '200',
                                        msg: '删除成功',
                                        result: '',
                                        total: doc.length
                                    })
                                }
                            }
                        })
                    }
                })
            }
        }
    })
})
//修改单个商品信息
router.post('/modifyProduct',multipartMiddleware, (req, res) => {
    let params = {
        _id: req.body.id
    }
    Good.find(params, (err,doc)=> {
        if(err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        }else {
            if(doc) {
                let conditions = {$set:{
                    'salePrice': req.body.salePrice,
                    'productName': req.body.productName,
                    'sub_title': req.body.sub_title,
                    'limit_num': req.body.limit_num,
                    'productMsg': req.body.productMsg,
                    }
                }
                Good.update(params,conditions,(err)=> {
                    if(err) {
                        res.json({
                            status: '1',
                            msg: err.message,
                            result: ''
                        })
                    } else {
                        Good.find((err, doc)=> {
                            if(err) {
                                res.json({
                                    status: '1',
                                    msg: err.message,
                                    result: ''
                                })
                            }else{
                                if(doc){
                                    res.json({
                                        status: '200',
                                        msg: '修改成功',
                                        result: '',
                                        total: doc.length
                                    })
                                }
                            }
                        })
                    }
                })
            }
        }
    })

    
})
//分页
router.get('/pagenation',multipartMiddleware,(req, res)=> {
    let page = req.query.page || 1;
    let pageSize = 10;
    let skip = (page - 1) * pageSize;//跳过多少条
    let total = 0;
    Good.find((err, doc)=> {
        if(err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        }else{
            if(doc){
                total = doc.length;
            }
        }
    })
    Good.find((err, doc)=> {
        if(!err){
            res.json({
                status: '200',
                message: '成功',
                length: total,
                result: doc
            })
        }else{
            res.json({
                status: '1',
                result: '',
                message: err.message
            })
        }
    }).skip(skip).limit(pageSize)
})
module.exports = router;