const express           = require("express");
const router            = express.Router();
const middleware        = require("../middleware/index");
const bookController    = require("../controllers/books");

router.get("/",(req,res)=>res.send("Hi There"))

/* Get all books */
router.get("/api/books",bookController.getBooks);

/* Post Book */
router.post("/api/books",middleware.isLoggedIn,bookController.postBook);

/* Show specific book */
router.get("/api/books/:id",bookController.showSpecificBook);

/* Post edit Book */
router.put("/api/books/:id",middleware.isLoggedIn,bookController.postEditBook);

/* Delete Book */
router.delete("/api/books/:id",middleware.isLoggedIn,bookController.deleteBook);

module.exports = router;