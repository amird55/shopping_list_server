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

router.post("/", [], async (req, res) => {
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
router.get("/",[],async (req,res)=>{
    let Query = "SELECT * FROM `categories`"
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});
router.put("/",[],async (req,res)=>{
    const {id,name} = req.body;
    let Query = "UPDATE `categories` SET `name` = ? WHERE `id` =?"
    const promisePool = db_pool.promise();
    let vv = [name,id];
    let rows=[];
    try {
        [rows] = await promisePool.query(Query,vv);
        res.status(200).json({message:"OK"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});
router.delete("/",[],async (req,res)=>{
    const {id} = req.body;
    let Query = "DELETE FROM `categories` WHERE `id` = ?"
    let vv = [id];
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query,vv);
        res.status(200).json({message:"OK"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});


