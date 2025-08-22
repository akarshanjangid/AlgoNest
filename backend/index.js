require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); 

const HoldingModel = require('./model/HoldingModel');
const PositionalModel  = require('./model/PositionsModel');
const OrderModel = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;



const app = express();
app.use(cors());
app.use(express.json()); // for parsing JSON bodies in POST requests

// Route to add holdings
app.get('/addHoldings', async (req, res) => {
  try {
    const tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
    ];

    for (const item of tempHoldings) {
      const newHolding = new HoldingModel(item);
      await newHolding.save();
    }

    res.send("Holdings Added!");
  } catch (err) {
    console.error("Error adding holdings:", err);
    res.status(500).send("Failed to add holdings");
  }
});

// Route to add positions
app.get('/addpositions', async (req, res) => {
  try {
    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "ANC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    for (const item of tempPositions) {
      const newPosition = new PositionalModel(item);
      await newPosition.save();
    }

    res.send("Positions Added!");
  } catch (err) {
    console.error("Error adding positions:", err);
    res.status(500).send("Failed to add positions");
  }
});

// Route to fetch all holdings
app.get('/allholdings', async (req, res) => {
  try {
    const holdings = await HoldingModel.find({});
    res.json(holdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).send("Failed to fetch holdings");
  }
});

// Route to fetch all positions
app.get('/allpositions', async (req, res) => {
  try {
    const positions = await PositionalModel.find({});
    res.json(positions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).send("Failed to fetch positions");
  }
});

app.post('/newOrder', async (req, res) => {
    try {
        const newOrder = new OrdersModel(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start server and connect to DB
app.listen(PORT, async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected!");
    console.log("App started on port", PORT);
  } catch (err) {
    console.error("DB connection failed:", err);
  }
});
