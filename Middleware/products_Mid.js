async function AddProd(req,res,next){
    const {name,categ_id,price} = req.body;

    let Query = "INSERT INTO `products`( `name`,`categ_id`,`price`) VALUES (?,?,?)"
    let vv = [name,categ_id,price];
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
    let Query = "SELECT * FROM `products`"
    const promisePool = db_pool.promise();
    let rows = [];
    req.ok=false;
    req.products=[];
    try {
        [rows] = await promisePool.query(Query);
        req.products = rows;
        req.ok=true;
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
    next();
}
async function UpdateProd(req,res,next) {
    const {id,name,categ_id,price} = req.body;
    let Query = "UPDATE `products` SET "
    Query += " `name` = ? ,"
    Query += " `categ_id` = ? ,"
    Query += " `price` = ? "
    Query += " WHERE `id` =?"
    const promisePool = db_pool.promise();
    let vv = [name,categ_id,price,id];
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
async function DeleteProd(req,res,next) {
    const {id} = req.body;
    let Query = "DELETE FROM `products` WHERE `id` = ?"
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
    AddProd,
    GetList,
    UpdateProd,
    DeleteProd,
};