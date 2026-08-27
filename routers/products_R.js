const express = require('express');
const router = express.Router();
module.exports = router;

const products_Mid = require('../Middleware/products_Mid');

router.post("/", [products_Mid.AddProd],  (req, res) => {
    if (req.ok)
        res.status(200).json(req.data);
    else
        res.status(500).json({message: "error"});
});
router.get("/",[products_Mid.GetList], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.products);
    else
        res.status(500).json({message: "error"});
});
router.put("/",[products_Mid.UpdateProd], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.msg);
    else
        res.status(500).json({message: "error"});
});
router.delete("/",[products_Mid.DeleteProd], (req,res)=>{
    if (req.ok)
        res.status(200).json(req.msg);
    else
        res.status(500).json({message: "error"});
});


