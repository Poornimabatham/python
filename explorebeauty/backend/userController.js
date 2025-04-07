// const { validationResult } = require("express-validator");

// const registerUser = (req, res) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       success: false,
//       errors: errors.array(),
//     });
//   }

//   const userName = req.body.name;
//   const userEmail = req.body.email;
//   const userPass = req.body.pass;

//   res.json({
//     success: true,
//     message: "User registered successfully",
//     data: {
//       name: userName,
//       email: userEmail,
//     },
//   });
// };

// module.exports = registerUser;
// //

const { validationResult } = require("express-validator");
const { User, ContactUs } = require("./models/User"); // adjust path if needed
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;
    console.log(email, password, "pass");

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log(email, password, "pass");

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: "Login successful",
      user: { email: user.email, id: user._id },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.ContactUs = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    console.log(req.body);
    const savecontact = new ContactUs({ name, email, msg });
    await savecontact.save();
    res.status(200).json({ message: "contanct successful" });
  } catch (e) {
    console.log(e);
  }
};
