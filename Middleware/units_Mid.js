async function AddUnit(req,res,next){
    const {name} = req.body;

    let Query = "INSERT INTO `units`( `name`) VALUES (?)"
    let vv = [name];
    const promisePool = db_pool.promise();
    let rows=[];
    req.ok=false;
    req.data={};
    try {
        [rows] = await promisePool.query(Query,vv);
        req.ok=true;
        req.data={message:"created",name:name};
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }

    next();
}
async function GetList(req,res,next) {
    let Query = "SELECT * FROM `units`"
    const promisePool = db_pool.promise();
    let rows = [];
    req.ok=false;
    req.unit=[];
    try {
        [rows] = await promisePool.query(Query);
        req.unit = rows;
        req.ok=true;
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
    next();
}
async function UpdateUnit(req,res,next) {
    const {id,name} = req.body;
    let Query = "UPDATE `units` SET `name` = ? WHERE `id` =?"
    const promisePool = db_pool.promise();
    let vv = [name,id];
    let rows=[];
    req.ok=false;
    try {
        [rows] = await promisePool.query(Query,vv);
        req.msg={message:"OK"};
        req.ok=true;
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
    next();
}
async function DeleteUnit(req,res,next) {
    const {id} = req.body;
    let Query = "DELETE FROM `units` WHERE `id` = ?"
    let vv = [id];
    const promisePool = db_pool.promise();
    let rows=[];
    req.ok=false;
    try {
        [rows] = await promisePool.query(Query,vv);
        req.msg={message:"OK"};
        req.ok=true;
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
    next();
}
module.exports = {
    AddUnit,
    GetList,
    UpdateUnit,
    DeleteUnit,
};