exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    else{
        res.json({
            message: "Please log in first to do that"
        })
    }
}