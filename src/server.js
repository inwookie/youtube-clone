import express from "express";

const PORT = 4000;

// Creating an express app
const app = express();

// This creates requests function to each page
const handleHome = (req, res) => {
  return res.send("<h1>Maybe this work</h1>");
};
const handleLogin = (req, res) => {
  return res.send("Login Page");
};

// This creates a page for my server
app.get("/", handleHome);
app.get("/login", handleLogin);

// Asking localhost:4000 to listen to what my requests are
const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
