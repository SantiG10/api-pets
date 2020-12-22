const mongoose = require("mongoose");
const { Schema } = mongoose;

const duenoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  documento: {
    type: Number,
    required: true,
    unique: true
  }
},
  {
    timestamps: true
  });

module.exports = mongoose.model("duenos", duenoSchema);