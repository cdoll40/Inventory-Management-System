const express = require("express");
const router = express.Router();
const { Image } = require("../models");
const multer = require('multer')

router.get("/", async (req, res) => {
    const listOfTest = await Image.findAll()
    res.json(listOfTest)
});

// var storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './public/images/')    
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })
 
// var upload = multer({
//     storage: storage
// });
 
// router.post("/", async (req, res) => {
//     if (!req.file) {
//         console.log(req.file)
//         console.log(req.body)
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         await Image.create('http://localhost:3001/images/' + req.file.filename)
//         // var imgsrc = 'http://localhost:3001/images/' + req.file.filename
//         // var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//         // db.query(insertData, [imgsrc], (err, result) => {
//         //     if (err) throw err
//         //     console.log("file uploaded")
//         // })
//     }
// });

var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../client/public/images");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});


const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowd"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

router.post("/",upload.single("image"), async (req,res)=>{

    const filename = req.file;
    console.log(filename)
  
    if(!filename){
        res.status(422).json({status:422,message:"img error"})
    }
    
    try {
        

        await Image.create(filename)
        res.json(filename)
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});

module.exports = router;