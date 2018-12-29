const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const bookRouter    = require("./router/books")
const mongoose      = require("mongoose")


/* Connect to database */
mongoose.connect("mongodb://localhost/books_api",{ useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bookRouter);

/* app listen */
app.listen(process.env.PORT||3000,()=>console.log("server started!"))