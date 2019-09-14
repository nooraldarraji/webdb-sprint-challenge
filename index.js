const express = require("express")

const server = express()

server.use(express.json())
const projectRouter = require("./projects/router.js");

server.use("/projects", projectRouter);

const port = process.env.PORT || 5000

server.listen(port, console.log(`Listining on port #${port}`))