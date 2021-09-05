import express from "express";

const PORT = 4000;

// Creating an express app.
const app = express();

// As it calls on next function, it is a middleware. It doesn't respond to the request. It just sends the job to the next function.
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed");
  next();
};

// This creates requests function to each page. This is also called controllers.
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("<Welcome to the private lounge.");
};

// This creates a page for my server.
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

// Asking localhost:4000 to listen to what my requests are.
const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
