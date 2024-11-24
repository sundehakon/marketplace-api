const { connectToDatabase } = require("../lib/mongoose");
const Project = require("../models/Project");

const express = require("express");
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST route to handle data submission
router.post("/add-project", async (req, res) => {
   try {
      // Connect to the database
      await connectToDatabase();

      // Extract data from the request body
      const data = req.body;

      // Create and save a new item
      const newItem = new Project(data);
      const savedItem = await newItem.save();

      // Send a success response
      res.status(201).json({ success: true, item: savedItem });
   } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ success: false, error: error.message });
   }
});

module.exports = router;