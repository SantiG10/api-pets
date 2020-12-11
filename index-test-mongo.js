const mongoose = require("mongoose");

(async () => {
  console.log("Connect DB...");
  await mongoose.connect(
    "<STRING-CONNECTION_MONGO>",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
})();

const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date,
});

const BlogPostModel = mongoose.model("blospost", BlogPost);

const blogPost = new BlogPostModel({
  title: "titulo",
  body: "esto es un blog post",
  date: new Date(),
});



(async () => {
  console.log("Save post...");
  await blogPost.save(); // espera a guardar el documento
  await mongoose.disconnect(); // cierra la conexion
  console.log("Disconnect DB...");
})();
