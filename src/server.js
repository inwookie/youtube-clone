import express from "express";

const PORT = 4000;

// Creating an express app.
const app = express();

// As it calls on next function, it is a middleware. It doesn't respond to the request. It just sends the job to the next function.
const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle");
  next();
};

// This creates requests function to each page. This is also called controllers.
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

// This creates a page for my server.
app.get("/", gossipMiddleware, handleHome);

// Asking localhost:4000 to listen to what my requests are.
const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
