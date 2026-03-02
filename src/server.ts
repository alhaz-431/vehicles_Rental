import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ 
    message: "Vehicles Rental API চলছে!", 
    version: "1.0.0",
    status: "success"
  });
});

// API routes
app.use("/api/v1/auth", (req, res) => res.json({ message: "Auth API" }));
app.use("/api/v1/vehicles", (req, res) => res.json({ message: "Vehicles API" }));
app.use("/api/v1/bookings", (req, res) => res.json({ message: "Bookings API" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
