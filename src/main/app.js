import express from "express";
import userRoutes from "../routes/userRoutes.js";
import noteRoutes from "../routes/noteRoutes.js";

const app = express();

app.use(express.json());

// Mount user routes
app.use("/users", userRoutes);
// Mount note routes
app.use("/notes", noteRoutes);

app.get("/", (req, res) => {
  console.log("Received a GET request at /");
  res.send({
    message:
      "Node.js Express Application is Running, Ready to Handle Requests!",
    pod: process.env.HOSTNAME || "unknown", // Include pod name(kubernetes pod or Docker container) if available
  });
});

export default app;
