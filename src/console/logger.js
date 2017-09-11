const fs = require("fs")
const Console = require("console").Console

const output = fs.createWriteStream("./stdout.log")
const errorOutput = fs.createWriteStream("./stderr.log")

const logger = new Console(output, errorOutput)

const count = 5
logger.log("count: %d", count)