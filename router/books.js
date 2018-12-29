const express           = require("express");
const router            = express.Router();
const bookController    = require("../controllers/books");

router.get("/",(req,res)=>res.redirect("/api/books"))

/* Get all books */
router.get("/api/books",bookController.getBooks);

/* Post Book */
router.post("/api/books",bookController.postBook);

/* Show specific book */
router.get("/api/books/:id",bookController.showSpecificBook);

/* Post edit Book */
router.put("/api/books/:id",bookController.postEditBook);

/* Delete Book */
router.delete("/api/books/:id",bookController.deleteBook);

module.exports = router;