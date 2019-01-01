const User      = require("../models/user");
const bcrypt    = require("bcryptjs")
const passport  = require("passport");

/* Register logic */
exports.registerUser = (req,res)=>{
    const { name, email, password, password2 } = req.body;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(password2)

    //form validation
    let errors = [];
    if(!name||!email||!password||!password2){
        errors.push({message:"Please enter all fiels"})
    }
    if(password!=password2){
        errors.push({message:"Password do not match"})
    }
    if(errors.length>0){
        res.json(errors);
    }
    else{
        //check if email is EXIST
        User.findOne({email:email})
        .then((user)=>{
            if(user){
            //push another error message
            errors.push({message:"Email already exists"})
            //send error response
            res.json(errors);
        }else{
            //Create new user
            const newUser = new User({name,email,password});
            //use bcrypt to hash password
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    newUser.password = hash;
                    newUser.save()
                    res.json({message:"Successfully registered new user"})
                })
            })
        }
        })
        .catch((err)=>console.log(err));
    }
}

/* Login logic */
exports.login = passport.authenticate('local',{ successRedirect: '/api/books',
failureRedirect: "/" })

/* Logout logic */
exports.logout = (req,res)=>{
req.logout()
res.json({
    message:"You are logged out"
})
}