const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const multer = require("multer");
const moment = require("moment");
const path = require('path')

const imgconfig = multer.diskStorage({
    destination:(req,file,callback) => {
        // callback(null, "./uploads");
        callback(null, "../client/public");
    },
    filename:(req,file,callback) => {
         callback(null, `image-${Date.now()}.${file.originalname}`)
         //callback(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

// const isImage = (req, file,callback) => {
//     if(file.mimetype.startsWith('image')){
//         callback(null,true)
//     }else{
//         callback(null,Error("only image is allowd"))
//     }
// }

const uploads = multer({
    storage:imgconfig,
    // fileFilter: isImage
})

 router.post("/register",uploads.single("photo"),(req,res) => {
    console.log(req.file)
    console.log(req.body)

    const {fname} = req.body;
    const {filename} = req.file;

    console.log("data")
    if(!fname || !filename){
        res.status(422).json({status:422,message:"fill all the details"})
    }
    try{
        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        conn.query("INSERT INTO usesrdata SET ?", 
        {username:fname,userimg:filename,date:date},
        (err,result) => {
            if(err){
                console.log("error")
            }else{
                // console.log("data added")
                res.status(201).json({status:201,data:req.body})
            }
        })

    }catch(error){
        res.status(422).json({status:422,error})
    }
 })




 router.get("/getdata", (req,res) => {
    try{
        conn.query("SELECT * FROM usesrdata",(err,result) => {
            if(err){
                console.log("error")
            }else{
                // console.log("data added")
                res.status(201).json({status:201,data:result})
            }
        })

    }catch(error){
         res.status(422).json({status:422,error})
        console.log(error)
    }
 })


// router.get('/',(re, res) => {
//     const sql = "ELECT * FROM usersdata";

//     conn.query(sql, (err, result) => {
//         if(err) return res.json({Message: 'Error inside server'});
//         return res.json(result)
//     })
// })






module.exports = router;