const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require('../models/keys');
// Load input validation

const validateRegisterInput = require("../register");
const validateLoginInput = require("../login");

// Load User model

const User = require('../models/user1')

router.get("/", (req, res) => {

    User.find({})
   .then(users => res.send(users))
   .catch(console.error);

   
})

router.post('/register', (req, res) => {
    const {errors, isValid } = validateRegisterInput(req.body)
    if(!isValid) {
        return res.status(400).json(errors)
    }


User.findOne({ username: req.body.username}) 
.then(user => {
    if (user) {
        return res.status(400).json({ username: "Username already exists"
    })
    }else {
        const newUser = new User ({
            username: req.body.username,
            password: req.body.password,
            balance: 1000,
            trophies: [""],
            created: [""]
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash
                newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err))
            })
        })
    }
    
    })

})


router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body)
    if(!isValid) {
        return res.status(400).json(errors)
    }
    const username = req.body.username
    const password = req.body.password

    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(404).json({emailnotfound: "email not found"})
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
                const payload = {
                    id: user.id,
                    username: user.username
                }
                jwt.sign(
                    payload,
                    keys.secretOrkey,
                    {
                        expiresIn: 958209485094
                    },
                    (err,token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token
                        })
                    }
                )
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect"})
            }
        })
    })
})

module.exports = router