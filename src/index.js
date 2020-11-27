const express = require('express');
const cors = require("cors")
const app = express();
const routes = require("./routes/routes.js")

app.use(cors())
app.listen(3000, console.log("Listening on 3000"))
app.use("/", routes);
