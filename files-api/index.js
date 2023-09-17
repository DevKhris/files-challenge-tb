const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const port = 8080;

const filesRoutes = require("./routes/files.routes");

app.use(express.json({ type: "application/json", strict: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));
app.use("/files", filesRoutes);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
