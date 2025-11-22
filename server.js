import connectDB from "./src/config/db.js";
import app from "./src/main/app.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  // MongoDB Connection
  await connectDB();

  app.listen(PORT, () => {
    // Server start log
    console.log(`Server is running on http://localhost:${PORT}`);

    // Use process.env.HOSTNAME which is set by Kubernetes or Docker
    // Local environment will default to "local-environment" if HOSTNAME is not set
    console.log(
      `Node API running on pod: ${process.env.HOSTNAME || "local-environment"}`
    );
  });
}

startServer();
