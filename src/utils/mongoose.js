const mongoose = require("mongoose");

mongoose
  .connect("mongodb://10.10.50.251:27017/fastify")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));