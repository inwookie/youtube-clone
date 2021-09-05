import express from "express";
import morgan from "morgan";

const PORT = 4000;

// Creating an express app.
const app = express();

// As it calls on next function, it is a middleware. It doesn't respond to the request. It just sends the job to the next function.
const logger = morgan("dev");

// This creates requests function to each page. This is also called controllers.
const home = (req, res) => {
  return res.send("hello world!");
};
const login = (req, res) => {
  return res.send("login");
};

// This creates a page for my server.
app.use(logger);
app.get("/", home);
app.get("/login", login);

// Asking localhost port of 4000 to listen to what my requests are.
const handleListening = () =>
  console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
