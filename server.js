const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./config");
const cors = require("cors");
//Routes
const topicRoutes = require("./routes/api/topic");
const app = express();
app.use(cors());

//Middelwarem
//BodyPars
app.use(express.json());

const PORT = process.env.PORT || 3000;

//Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MONGO DB Connected"))
  .catch((err) => console.log(err));

//User routes
app.use("/api/topics", topicRoutes);

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
