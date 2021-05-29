const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  age: { type: String},

  vacancies: [{ type: Types.ObjectId, ref: "vacancy" }],
  
  published_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  
  cv: {
    title: { type: String },
    profession: { type: String },
    keyInfo: { type: String },
    language: { type: String },
    experience: { type: String },
    salary: { type: String },
  }
});

module.exports = model("User", UserSchema);