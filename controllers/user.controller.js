const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
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