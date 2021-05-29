const { Schema, model, Types } = require("mongoose");

const VacancySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  level: {
    type: String,
  },
  conditions: {
    type: String,
  },
  contact: {
    type: String,
  },
  published_date: {
    type: Date,
    default: Date.now,
  },

  owner: {
    id: { type: Types.ObjectId, ref: "User" },
    name: { type: String, ref: "User" },
  },
});

module.exports = model("vacancy", VacancySchema);
