import connectDB from "./src/config/db.js";
import app from "./src/main/app.js";

const PORT = 3000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
