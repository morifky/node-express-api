const express       = require("express");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const passport      = require("passport");
const session       = require("express-session");
const bookRouter    = require("./router/books");
const userRouter    = require("./router/users");

const app           = express();

/* Config */
require("./config/passport")(passport)

/* Connect to database */
mongoose.connect("mongodb://latihan:password123@ds115340.mlab.com:15340/latihan_api",{ useNewUrlParser: true });

/* Body Parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


/* Express Session */
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
/* Passport middleware */
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use(bookRouter);
app.use(userRouter);


/* app listen */
app.listen(process.env.PORT||3000,()=>console.log("server started!"))