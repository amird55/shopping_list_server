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

module.exports = {
    AddCateg,
    GetList,
};