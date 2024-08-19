const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const cardRoutes = require("./routes/cardRoutes");

app.use(express.json());
app.use(cors());
app.use("/cards", cardRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const Card = require("./model/card");

// Initial data
const initialCards = [
  {
    title: "Using Abstract",
    description:
      "Abstract lets you manage, version, and document your designs in one place.",
  },
  {
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
  },
  {
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
  },
  {
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
  },
  {
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  },
  {
    title: "Abstract support",
    description: "Get in touch with a human.",
  },
];

// Function to initialize the database with cards
async function initializeDatabase() {
  try {
    // Clear existing cards
    await Card.deleteMany({});

    // Insert initial cards
    await Card.insertMany(initialCards);

    console.log("Database initialized with sample cards");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

// Call the function to initialize the database
initializeDatabase();

// Routes
app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/ping", (req, res) => {
  res.json({ message: "Server is running" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
