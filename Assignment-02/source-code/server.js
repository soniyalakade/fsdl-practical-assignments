import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();

const appts = client.db("fsdl6").collection("appointments");

const slots = ["10:00", "11:00", "12:00", "14:00", "15:00"];

// Get slots
app.get("/api/slots", (req, res) => {
  res.json(slots);
});

// ✅ SINGLE correct POST API
app.post("/api/appointments", async (req, res) => {
  const { name, phone, date, slot, specialist } = req.body;

  // Validation
  if (!name || !phone || !date || !slot || !specialist) {
    return res.status(400).json({ error: "All fields required" });
  }

  // Prevent past booking
  const today = new Date().toISOString().split("T")[0];
  if (date < today) {
    return res.status(400).json({ error: "Cannot book past dates" });
  }

  // ✅ FIXED: check clash per specialist
  const clash = await appts.findOne({ date, slot, specialist });

  if (clash) {
    return res.status(409).json({ error: "Slot already booked for this specialist" });
  }

  // Insert appointment
  const doc = {
    name,
    phone,
    date,
    slot,
    specialist,
    createdAt: new Date()
  };

  const out = await appts.insertOne(doc);

  res.json({ ok: true, id: out.insertedId });
});

// Get appointments
app.get("/api/appointments", async (req, res) => {
  const list = await appts
    .find()
    .sort({ createdAt: -1 })
    .limit(50)
    .toArray();

  res.json(list);
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});