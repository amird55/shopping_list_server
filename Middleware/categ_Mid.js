async function AddCateg(req,res,next){
    const {name} = req.body;

    let Query = "INSERT INTO `categories`( `name`) VALUES (?)"
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
    let Query = "SELECT * FROM `categories`"
    const promisePool = db_pool.promise();
    let rows = [];
    req.ok=false;
    req.categ=[];
    try {
        [rows] = await promisePool.query(Query);
        req.categ = rows;
        req.ok=true;
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
    next();
}
async function UpdateCateg(req,res,next) {
    const {id,name} = req.body;
    let Query = "UPDATE `categories` SET `name` = ? WHERE `id` =?"
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
async function DeleteCateg(req,res,next) {
    const {id} = req.body;
    let Query = "DELETE FROM `categories` WHERE `id` = ?"
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
    AddCateg,
    GetList,
    UpdateCateg,
    DeleteCateg,
};