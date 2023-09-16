const express = require("express");
const app = express();

const port = 8080;

const filesRoutes = require("./routes/files.routes");

app.use(express.json({ type: "application/json" }));

app.use("/files", filesRoutes);

app.listen(port, () => console.log(`Running on http://localhost${port}`));
