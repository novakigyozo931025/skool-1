var bunyan = require('bunyan');
var streams =[];
var PrettyStream = require('bunyan-prettystream');
   var prettyStdOut = new PrettyStream();
   prettyStdOut.pipe(process.stdout);
   streams.push({
     level: 'debug',
     stream: prettyStdOut});

var log = bunyan.createLogger({
  name:"skool",
  serializers: bunyan.stdSerializers,
  streams: streams,
});

module.exports = log ;
