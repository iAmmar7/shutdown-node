const express = require('express');
const app = express();

var exec = require('child_process').exec;

function shutdown(callback) {
  exec(`ReactComponents.png`, (error, stdout, stderr) => {
    callback(stdout);
  });
}

app.get('/', (req, res) => {
  res.send('Buckle up! You are about to fly!');

  exec(`shutdown /r`, (error, stdout, stderr) => {
    console.log(error, stdout, stderr);
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
