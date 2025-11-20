import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js Express Server is Running!");
  console.log("Received a GET request at /");
});

export default app;
