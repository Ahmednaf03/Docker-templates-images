const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Sampmodel = require("./database/model");
const connect = require("./database/connect");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World!".rainbow);

  res.send("Hello World!");
});

app.get("/api/sample", async (req, res) => {
  const data = await Sampmodel.find();
  res.json(data);
});

app.post("/api/sample", async (req, res) => {
  const data = new Sampmodel(req.body);
  await data.save();
  res.json(data);
});

app.delete('/api/sample/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log("received id "+id);
    
    const result = await Sampmodel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ error: 'Document not found' });
    }

    res.send({ message: 'Document deleted', result });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
