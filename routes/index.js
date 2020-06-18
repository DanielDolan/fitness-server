var express = require("express");
var router = express.Router();

// Subrouters;
const exercisesRouter = require("./exercises");
const usersRouter = require("./users")
const authRouter = require("../auth/");
// Mount our subrouters to assemble our apiRouter;

router.use("/exercises", exercisesRouter);
router.use("/user", usersRouter);
router.use("/auth", authRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;