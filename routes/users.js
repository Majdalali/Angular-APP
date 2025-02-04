const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../model/user');




router.post('/register', (req,res) => {
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        username: req.body.email,
        password: req.body.password
    });
    User.addUser(newUser, (err , user) => {
        if(err) {
            res.json({ success:false,msg:'field to register'})
        }else {
            res.json({ success:true,msg:'User registered'})
        }
    });
});
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'Email is wrong'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1week
                } );
                res.json({
                    success: true,
                    token : 'JWT' + token,
                    user: {
                        id : user._id,
                        name : user.name,
                        username: user.username,
                        email : user.email
                    }
                });

            }else {
                return res.json({success: false, msg: 'password is wrong'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.find({})
    .exec(function(err,User){
        if (err) {
            throw err;

        }else {
            res.send(User)
        }
    })
  });
  
  
module.exports = router;