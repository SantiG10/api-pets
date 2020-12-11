const mongoose = require("mongoose");

const conexion = async () => {
  console.log("Connect DB...");
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect DB Success...");
  } catch (error) {
    console.log("Connect DB Error...");
    console.log(error);
  }
};

module.exports = conexion; 