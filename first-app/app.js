/*const logger = require("./logger"); // require('./logger.js');
const log = require("./logger2"); // require('./logger.js');

console.log(logger);
logger.log("dd");

console.log(log);
log("dd2");

const fs = require("fs");
const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
}); */

const Logger = require("./logger");
const logger = new Logger();
logger.on("meesageLogged", (arg) => {
  console.log("Listner called", arg);
});
logger.on("meesageLogged", (arg) => {
  console.log("Listner called2", arg);
});

logger.log("message");
