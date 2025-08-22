const { model } = require("mongoose");
const { PositionSchema } = require("../schemas/PositionalSchema");

const PositionalModel = model("position", PositionSchema);

module.exports = PositionalModel;
