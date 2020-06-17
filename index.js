const express = require('express');
const app = express();

// Require child_process
var exec = require('child_process').exec;

// Create shutdown function
function shutdown(callback) {
  console.log('Am i invoking?');
  exec(`display ReactComponents.png`, function (error, stdout, stderr) {
    callback(stdout);
  });
}

app.get('/', (req, res) => {
  res.send('Buckle up! You are about to fly');
  // Reboot computer
  shutdown(function (output) {
    console.log(output);
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
