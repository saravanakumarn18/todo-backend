const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();
// var cors = require('cors');
// app.use(cors());

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"]
}));

app.use("/api/tasks", tasks);

// const port = process.env.PORT || 3001;
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));