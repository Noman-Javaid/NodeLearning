module.exports = reqFilter= (req, res,next)=>{
    if(!req.query.age){
        res.send("Please Enter Your age ?age=XX")
    }else if(req.query.age < 18){
        res.send("You are under age")
    }else{
        next();
    }
}