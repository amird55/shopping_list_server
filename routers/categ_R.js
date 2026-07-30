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
    res.status(200).json({message:"created"});
});

