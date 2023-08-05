const simpleRegisters = require('../models/SimpleRegisters');
const jwt = require('jsonwebtoken')

exports.getUsers = async (req,res,next) => {
    try{
        const usersData = await simpleRegisters.find();
        if(!usersData){
            return res.status(400).json({
                message : "Something went wrong!",
                success : false
            });
        }
        return res.status(200).json({
            success : true,
            data : usersData
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal server error!"+err,
            success : false
        })
    }
}


exports.getUniqueUser = async (req,res,next) => {
    if(!req.body.password || !req.body.emailId ){
        return res.status(404).json({
            message : "send valid data",
            success : false
        })
    }
    try{
        const usersData = await simpleRegisters.findOne({emailId : req.body.emailId,password : req.body.password});

        // const token = jwt.sign(usersData,"SecretKey");
        // res.setHeader("token",token);
        // res.setHeader("Allow-Expose-Header")
        
        if(!usersData){
            return res.status(400).json({
                message : "No such document exist!",
                success : false
            });
        }
        return res.status(200).json({
            success : true,
            data : usersData
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal server error!"+err,
            success : false
        })
    }
}


exports.postUser = async (req,res,next) => {
    if(!req.body.username || !req.body.password || !req.body.dob || !req.body.emailId ){
        return res.status(404).json({
            message : "send valid data",
            success : false
        })
    }
    const postableObject = {
                                username : req.body.username,
                                password : req.body.password,
                                dob : req.body.dob,
                                emailId : req.body.emailId,
                            
    };
    try{
        const postedData = await simpleRegisters.create(postableObject);
        if(!postedData){
            return res.status(400).json({
                message : "Something went wrong!",
                success : false
            });
        }
        return res.status(200).json({
            success : true,
            data : postedData
        })
    }catch(err){
        return res.status(500).json({
            message : "Internal server error!"+err,
            success : false
        })
    }
}