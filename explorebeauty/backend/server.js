// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());
// const path = require("path");

// const mongoURI = "mongodb://localhost:27017/beautywebsite";

// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// const employeeSchema = new mongoose.Schema({
//   firstName: String,
//   employeeCode: String,
//   LastName: String,
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   repeatpassword: String,
// });

// const Employee = mongoose.model("Employee", employeeSchema);
// const User = mongoose.model("User", userSchema);

// app.post("/signup", async (req, res) => {
//   try {
//     const name = req.body.name;

//     const email = req.body.email;
//     const password = req.body.password;
//     const repeatpassword = req.body.repeatpassword;
//     console.log(email, "user", password, repeatpassword, req);

//     const existingUser = await User.findOne({
//       email,
//     });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const newUser = new User({ name, email, password, repeatpassword });
//     const savedUser = await newUser.save();
//     console.log(savedUser, "User saved successfully");
//     res.status(200).json({
//       success: true,
//       data: {
//         message: "Login successful",
//       },
//     });
//   } catch (err) {
//     console.error("Error creating user:", err);
//     res
//       .status(500)
//       .json({ message: "Error creating user", error: err.message });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     console.log(email, password, "user454", user);

//     // Check if the user exists
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" }); // Or "User not found" for more specific feedback
//     }

//     // At this point, the user exists. Now you would typically:
//     // 1. Compare the provided password with the hashed password stored in the database
//     //    using bcrypt.compare().
//     // 2. If the passwords match, generate a session or JWT for authentication.

//     // For now, since you haven't implemented password hashing, we'll just proceed
//     // assuming the password check would happen here.
//     // **IMPORTANT: DO NOT STORE OR COMPARE PLAIN-TEXT PASSWORDS IN PRODUCTION!**
//     if (user.password !== password) {
//       // Replace this with bcrypt.compare()
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({
//       success: true,
//       data: {
//         _id: user._id, // It's good practice to include the user ID
//         email: user.email,
//         message: "Login successful",
//       },
//     });
//   } catch (err) {
//     console.error("Error during login:", err);
//     res.status(500).json({ message: "Error during login", error: err.message });
//   }
// });

// //
// // Setup Express and bodyParser first
// // const express = require("express");
// const bodyParser = require("body-parser");
// // const path = require("path");
// // const app = express();

// // ✅ Middleware must come BEFORE the router
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); // (optional, for JSON requests)

// // ✅ Now use routes
// const router = require("./userRoutes");
// app.use("/api/v1",router);

// // Serve the HTML page
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Import routes
const userRoutes = require("./userRoutes"); // adjust path if in a subfolder

// Create app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = "mongodb://localhost:27017/beautywebsite";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Use routes
app.use("/api/v1", userRoutes);
// app.use(userRoutes);

// Default route to serve an HTML page (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // only if index.html exists
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
