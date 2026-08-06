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

router.post("/Create", [], async (req, res) => {
    const {name} = req.body;

    let Query = "INSERT INTO `categories`( `name`) VALUES (?)"
    let vv = [name];
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query,vv);
        res.status(200).json({message:"created",name:name});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});
router.get("/List",[],(req,res)=>{
    res.status(200).json(TempCateg);
});


