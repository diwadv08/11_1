const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const SECRET_KEY = "mysecretkey"; // Secret key for signing JWTs

app.use(bodyParser.json());

// **Login Route - Generates JWT**
app.post("/login", (req, res) => {
  const user = { username: req.body.username || "testuser" }; // Dummy user
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "30s" }); // Generate JWT
  res.json({ token });
});

// **Middleware to Set Authorization Header for Testing**
app.use((req, res, next) => {
  if (!req.headers["authorization"]) {
    req.headers["authorization"] = "mysecretkey"; // Set a dummy token
  }
  next();
});

// **JWT Verification Middleware**
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Token required" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

// **Protected Route - Requires a Valid JWT**
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard!", user: req.user });
});

// **Test Route - Manually Set Headers**
app.get("/test", (req, res) => {
  req.headers["authorization"] = "Bearer test-token-123";
  res.json({ message: "Header manually set!", token: req.headers["authorization"] });
});

// **Start Server**
app.listen(5000, () => console.log("Server running on port 3000"));
