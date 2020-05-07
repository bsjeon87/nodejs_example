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

const EventEmitter = require("events");
const emitter = new EventEmitter();

//register a listener
emitter.on("meesageLogged", function () {
  console.log("Listner called");
});

//raise an event
emitter.emit("meesageLogged");
