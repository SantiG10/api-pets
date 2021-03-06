const mongoose = require("mongoose");
const { Schema } = mongoose;

const veterinariaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true,
    unique: true
  }
},
  {
    timestamps: true
  });

module.exports = mongoose.model("veterinarias", veterinariaSchema);