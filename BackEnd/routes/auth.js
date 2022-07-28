const express = require ('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Create A user using : POST "/api/auth" Doesn't require Authentication
router.post('/',[
    body('name','Enter a valid Name: ').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be atleast 8 characters long').isLength({min: 8})
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
      res.json({error: 'Please Enter a unique Value',message:err.message})})

   
})
module.exports = router;