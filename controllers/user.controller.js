const mongoose = require('mongoose');

const User = mongoose.model('User');

register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.status(200).send({status:"true",id:doc.id,"message":"registered Successfully"});
        else {
            console.log("This is error ",err)
            if (err)
                res.status(422).send({status:"false",code:err.code,"message":err.errmsg});
            else
                return next(err);
        }

    });
}
login = (req, res, next) => {
    
        User.findOne({"email":req.body.email},function(err,res2){
            if(res2.password==req.body.password)
            {
                res.status(200).send({status:"true","message":"registered Successfully "});
            }
            else{
                 res.status(422).send({status:"false","message":"PASSWORD INCORRECT..Provide the correct password"});
            }
            
})
} 
forgotpass=(req,res,next)=>{

}
module.exports = {
    register,
    login,
    forgotpass
}