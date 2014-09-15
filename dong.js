#!/usr/bin/env node

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

var Version = (  (now.getYear()+1900) 
  + "." 
  + day 
  + "." 
  + ("0" + now.getHours() ).slice(-2) 
  + ("0" + now.getMinutes() ).slice(-2) 
 );

//process.stdout.write( Version );


var fs = require('fs');
var file = 'package.json';

fs.readFile(file, 'utf8', function (err, data) {
  data = JSON.parse(data);
  data.version = Version;
  str = JSON.stringify(data, 1, 1) + "\n" ;
  fs.writeFile(file, str, null, null);
 });

