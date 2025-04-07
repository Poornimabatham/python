// const express = require("express");
// const router = express.Router();
// const { body, validationResult } = require("express-validator");

// const registerUser = require("./userController");

// router.post(
//   "/submit",
//   [
//     body("name").notEmpty().withMessage("Name is required"),
//     body("email").isEmail().withMessage("Valid email is required"),
//     body("pass")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters"),
//   ],
//   registerUser
// );
// router.route("/login").get(registerUser);

// router.route("/create").post(registerUser);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// ✅ Import individual controller functions
const { registerUser, loginUser, ContactUs } = require("./userController");

// 👇 Register Route (Signup)
router.post(
  "/signup",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

// 👇 Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

router.post(
  "/ContactUs",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("name").notEmpty().withMessage("name is required"),
    body("msg").notEmpty().withMessage("message is required"),
  ],
  ContactUs
);

module.exports = router;
