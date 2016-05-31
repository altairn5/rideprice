'use strict';
var fs = require('fs');
fs.createReadStream('.sample-env')
<<<<<<< HEAD
  .pipe(fs.createWriteStream('.env'));`
=======
  .pipe(fs.createWriteStream('.env'));
>>>>>>> 95d86a5edb9578d02c1197f8bfb3a24f8800ac79
