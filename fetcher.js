// objectives
// download resource at URl
// print message when source completes download and save

const args = process.argv.slice(2);
console.log("1. ",args);

function getFilesizeInBytes(filename) {
  let stats = fs.statSync(filename);
  let fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

const net = require('net');
const socket = net.createConnection({
  host: 'example.edu',
  port: 80
});
socket.setEncoding('UTF8');

socket.on('connect', () => {
  console.log(`2. Connected to server`);
});

// request resource from URL
const fs = require('fs');
const request = require('request');

request (args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);

  // to access error, response and body, writeFile function needed to be within require function
  const content = (error, response, body);
  
  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err);
    }
    console.log(`3. Downloaded and saved ${getFilesizeInBytes(args[1])} bytes to ${args[1]}`)
  // file written successfully
  });

});