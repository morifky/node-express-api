const Book      = require("../models/books");

/* Get all books */
exports.getBooks = async (req,res)=>{
    await Book.find({})
    .then(books=>res.json(books))
    .catch((err)=>console.error(err));
}

/* Post book */
exports.postBook = async(req,res)=>{
    let newTitle    = req.body.title;
    let newAuthor   = req.body.author;
    let newGenre    = req.body.genre;
    let newYear     = req.body.year;
    let newBook     = {
        title   : newTitle,
        author  : newAuthor,
        genre   : newGenre,
        year    : newYear
    }
    console.log(newBook)
    await Book.create(newBook)
    .then((newBook)=>res.json(newBook))
    .catch((err)=>console.error(err));
}

/* Show specific book */
exports.showSpecificBook = async (req,res)=>{
    await Book.findById(req.params.id)
    .then((foundBook)=>res.json(foundBook))
    .catch((err)=>console.error(err));
}

/* Post edit book */
exports.postEditBook = async (req,res)=>{
    let editTitle    = req.body.title;
    let editAuthor   = req.body.author;
    let editGenre    = req.body.genre;
    let editYear     = req.body.year;
    let editBook     = {
        title   : editTitle,
        author  : editAuthor,
        genre   : editGenre,
        year    : editYear
    }
    console.log(editBook)
    await Book.findByIdAndUpdate(req.params.id,editBook)
    .then((updateBook)=>res.redirect("/api/books"))
    .catch((err)=>console.error(err));
}

/* Delete book */
exports.deleteBook = async (req,res)=>{
    await Book.findByIdAndDelete(req.params.id)
    .then((deleteBook)=>res.redirect("/api/books"))
    .catch((err)=>console.error(err));
}