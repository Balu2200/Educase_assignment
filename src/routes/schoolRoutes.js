const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/addSchool", async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res
      .status(400)
      .json({ error: "Latitude and longitude must be numbers" });
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: "School added", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/listSchools", async (req, res) => {
  const { latitude, longitude } = req.query;

  if (latitude == null || longitude == null) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }
  if (isNaN(latitude) || isNaN(longitude)) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude must be numbers" });
  }

  try {
    const [schools] = await db.execute("SELECT * FROM schools");
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const sortedSchools = schools
      .map((school) => {
        const schoolLat = school.latitude;
        const schoolLon = school.longitude;
        const distance = Math.sqrt(
          Math.pow(userLat - schoolLat, 2) + Math.pow(userLon - schoolLon, 2)
        );
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools.map(({ distance, ...rest }) => rest));
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
