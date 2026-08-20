const express = require('express');
const router = express.Router();
module.exports = router;

const unit_M = require('../Middleware/units_Mid');

router.post("/", [unit_M.AddUnit],  (req, res) => {
    if (req.ok)
        res.status(200).json(req.data);
    else
        res.status(500).json({message: "error"});
});
router.get("/",[unit_M.GetList], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.unit);
    else
        res.status(500).json({message: "error"});
});
router.put("/",[unit_M.UpdateUnit], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.msg);
    else
        res.status(500).json({message: "error"});
});
router.delete("/",[unit_M.DeleteUnit], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.msg);
    else
        res.status(500).json({message: "error"});
});


