// 실제 모듈은 내부적으로 아래와같이 function 함수형태임.
//(function (exports, require, module, __filename, __dirname) {
console.log(__filename);
console.log(__dirname);
console.log(module);
var url = "http://mylogger.io/log";

function log(message) {
  //send an http request
  console.log(message);
}

module.exports = log;
//});
