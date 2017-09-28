var express = require('express');
var studentDB = require('../db/studentDB');

var studentRouter = express.Router();

studentRouter.get('/findAll',function(req,resp){
    // console.log(111);
    studentDB.findAll(function(result){
        // console.log(result);
        resp.json(result);
    });
});

studentRouter.get('/findById',function(req,resp){
    var id = req.query.id;
    // console.log(id);
    studentDB.findById(id,function(result){
        // console.log(result);
        resp.json(result);
    });
});

studentRouter.post('/batchDelete',function(req,resp){
    var ids = req.body;
    studentDB.batchDelete(ids,function(result){
        resp.send(result);
    });
});

studentRouter.get('/update',function(req,resp){
    var id = req.query.id;
    var name = req.query.name;    
    var gender = req.query.gender;    
    var birth = req.query.birth; 
    // console.log(id,name,gender,birth); 
    studentDB.update(id,name,gender,birth,function(result){
        resp.json(result);
    });
});

studentRouter.get('/save',function(req,resp){
    var name = req.query.name;    
    var gender = req.query.gender;    
    var birth = req.query.birth;  
    // console.log(name,gender,birth);
    studentDB.save(name,gender,birth,function(result){
        resp.json(result);
    });
});
module.exports = studentRouter;