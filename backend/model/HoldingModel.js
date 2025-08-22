const { model } = require("mongoose");
const {HoldingSchema} = require("../schemas/HoldingSchema");

const HoldingsModel = model("holding", HoldingSchema);

module.exports = model("holding", HoldingSchema);

