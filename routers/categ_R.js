const express = require('express');
const router = express.Router();
module.exports = router;


router.get("/Add", [], (req, res) => {
    res.status(200).json({message:"OK"});
    // if(res.ok)
    //     res.status(200).json({message:"OK", Last_Id:res.insertId});
    // else
    //     return res.status(500).json({message: res.err});
});

router.post("/Create", [], (req, res) => {
    //INSERT INTO `categories`(`id`, `name`) VALUES ('[value-1]','[value-2]')
    const {name} = req.body;
    TempCateg.push(name);
    res.status(200).json({message:"created",name:name});
});
router.get("/List",[],(req,res)=>{
    res.status(200).json(TempCateg);
});


