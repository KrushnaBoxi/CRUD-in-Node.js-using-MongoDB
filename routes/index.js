var express = require('express');
var SaveRecord = require("../routes/SaveRecord");
var DisplayAllRecords = require("../routes/DisplayAllRecords");
var DeleteRecord = require("../routes/DeleteRecord");
var router = express.Router();
var EditRecord = require("../routes/EditRecord");
var AfterEditSave = require("../routes/AfterEditSave");

router.get('/', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.get('/customer/addUser', function(req, res, next) {
  res.render('add', { title: 'Hello' });
});
router.post('/customer/add', SaveRecord);

router.get('/customer/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.get('/customer/delete/:id', DeleteRecord);
router.get('/customer/display',DisplayAllRecords);
router.get('/customer/edit/:id',EditRecord);
router.post('/customer/afterEdit/:id',AfterEditSave);
module.exports = router;
