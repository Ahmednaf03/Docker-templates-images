
const mongoose = require("mongoose");

const SampleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
    
  },
});

const Sampmodel = mongoose.model("samp", SampleSchema);

module.exports = Sampmodel;
