import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

// Creating an express app.
const app = express();

// As it calls on next function, it is a middleware. It doesn't respond to the request. It just sends the job to the next function.
const logger = morgan("dev");

// This creates a page for my server.
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// Asking localhost port of 4000 to listen to what my requests are.
const handleListening = () =>
  console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
