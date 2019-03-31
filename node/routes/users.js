var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Users = require('../models/users')
var uuid = require('node-uuid')

// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/game', { useNewUrlParser: true })

mongoose.connection.on('conneted', function () {
  console.log('conneted success')
})

/* GET users listing. */
// 用户登录
router.post('/login', (req, res, next) => {
  console.log(req.originalUrl)
  let param = {
    userPhone: req.body.userPhone,
    userPwd: req.body.userPwd
  }
  Users.findOne(param, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (doc) {
        res.cookie('id', doc.id, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 10
        })
        res.json({
          status: '0',
          msg: '',
          result: {
            userPhone: doc.userPhone
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '登录失败，密码或账号不对!',
          result: ''
        })
      }
    }
  })
})
//用户登出
router.post('/logout', (req, res, next) => {
  res.cookie('id', '', {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '',
    result: ''
  })
})
//用户注册
router.post('/register', (req, res, next) => {
  let id = uuid.v1().replace(/\-/g, '')
  let userPhone = req.body.userPhone
  let userPwd = req.body.userPwd
  Users.findOne({ userPhone: req.body.userPhone }, (err, doc) => {
    console.log(doc)
    if (doc) {
      res.json({
        status: '1',
        msg: '此账号已被注册',
        result: ''
      })
    } else {
      let regUser = new Users({
        id,
        userPhone,
        userPwd
      })
      regUser.save(function (err, content) {
        if (err) {
          return res.json({
            status: '1',
            msg: err || '注册失败',
            result: ''
          });
        } else {
          return res.json({
            status: '0',
            msg: "注册成功",
            result: ''
          });
        }
      })
    }
  })
})
//登录检查
router.post('/checklogin', (req, res, next)=>{
  res.json({
    status: '0'
  })
})
module.exports = router;
