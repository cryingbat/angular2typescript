let express = require("express");
let router = express.Router();
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
var crypto = require("crypto");
let User = require("../models/user");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/users", (req, res, next) => {
    res.json({
        status: 200,
        result: [{
            test: '获取成功',
        }],
        message: '获取成功'
    })
});
// 测试登陆
router.post("/testLogin", multipartMiddleware, function (req, res) {
  console.log(req.body.userName, req.body.userPwd)
  res.json({
    status: "200",
    msg: "登陆成功",
    result: {
      name: 'dhq',
      api_token: 'fbsdjklbglag4654fregnjsdnvsF',
      userName: req.userName
    }
  });
});
// 登陆接口
router.post("/login", multipartMiddleware, function (req, res) {
  var md5 = crypto.createHash("md5");
  var pwd = md5.update(req.body.userPwd).digest("hex");
  let params = {
    userName: req.body.userName,
    userPwd: pwd,
  };
  User.findOne(params, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: "",
      });
    } else if (doc) {
      res.cookie("userId", doc.userId, {
        path: "/",
        maxAge: 1000 * 60 * 60,
      });
      let r1 = Math.floor(Math.random() * 10);
      let r2 = Math.floor(Math.random() * 10);
      let userId = `${r1}${
        Date.parse(new Date()) / 1000
      }${r2}ssssewewhcdkjashdasdlj`;
      var md5 = crypto.createHash("md5");
      var token = md5.update(userId).digest("hex");
      res.json({
        status: "200",
        msg: "登陆成功",
        result: {
          name: doc.name,
          api_token: token,
          userName: doc.userName,
          avatar: doc.avatar,
        },
      });
    } else {
      res.json({
        status: "1",
        msg: "账号或者密码错误",
        result: "",
      });
    }
  });
});
// 登出登陆
router.post("/loginOut", function (req, res) {
  res.cookie("userId", "", {
    path: "/",
    maxAge: -1,
  });
  res.json({
    status: "200",
    msg: "登出成功",
    result: "",
  });
});
// 注册账号
router.post("/register", function (req, res) {
  let userName = req.body.userName, //账号
    userPwd = req.body.userPwd, // 密码
    name = req.body.name;
  User.findOne({ userName }, (err, doc) => {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: "",
      });
    } else {
      if (doc) {
        res.json({
          status: "1",
          msg: "账号已存在!",
          result: "",
        });
      } else {
        let r1 = Math.floor(Math.random() * 10);
        let r2 = Math.floor(Math.random() * 10);
        let userId = `${r1}${Date.parse(new Date()) / 1000}${r2}`;
        var md5 = crypto.createHash("md5");
        var pwd = md5.update(userPwd).digest("hex");
        // 可以注册
        User.insertMany(
          {
            userName: userName,
            name: name,
            avatar: "http://osc9sqdxe.bkt.clouddn.com/default-user-avatar.png",
            userId: userId,
            userPwd: pwd,
          },
          (err) => {
            if (!err) {
              res.json({
                status: "200",
                msg: "注册成功",
                result: "",
              });
            } else {
              res.json({
                status: "200",
                msg: err.message,
                result: "",
              });
            }
          }
        );
      }
    }
  });
});
//获取用户列表
router.get("/user", (req, res) => {
  User.find((err, doc) => {
    if (!err) {
      res.json({
        status: "200",
        result: doc,
        message: "获取成功",
      });
    }
  });
});
router.get("/userInfo", (req, res) => {
  User.find((err, doc) => {
    if (!err) {
      res.json({
        status: "200",
        result: doc,
        role: ["admin"],
        message: "获取成功",
      });
    } else {
      res.json({
        status: "1",
        result: [],
        role: [],
        message: "获取失败",
      });
    }
  });
});
module.exports = router;
