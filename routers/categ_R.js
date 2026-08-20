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
router.get("/",[categ_M.GetList], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.categ);
    else
        res.status(500).json({message: "error"});
});
router.put("/",[categ_M.UpdateCateg],async (req,res)=>{
    if (req.ok)
        res.status(200).json(req.msg);
    else
        res.status(500).json({message: "error"});
});
router.delete("/",[categ_M.DeleteCateg],async (req,res)=>{
    if (req.ok)
        res.status(200).json(req.msg);
    else
        res.status(500).json({message: "error"});
});


