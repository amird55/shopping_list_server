const express = require('express');
const router = express.Router();
module.exports = router;

const categ_M = require('../Middleware/categ_Mid');

router.post("/", [categ_M.AddCateg],  (req, res) => {
    if (req.ok)
        res.status(200).json(req.data);
    else
        res.status(500).json({message: "error"});
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


