import express from "express";
import passport from "passport";
import { forwardAuthenticated } from "../middleware/checkAuth";

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => {
  res.render("login");
  // res.render("login", { messages: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    /* FIX ME: 😭 failureMsg needed when login fails */
    failureFlash: true,
  }),

  // function(req, res, next) {
  //   // Check if there's a specific reason for login failure
  //   if (req.flash("error").length === 0) {
  //     // No specific reason, so add a generic error message
  //     req.flash("error", "An error occurred during login");
  //   }
  //   // Redirect back to the login page with flash messages
  //   res.redirect("/auth/login");
  // }
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
  });
  res.redirect("/auth/login");
});

export default router;
