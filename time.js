const moment = require('moment');

let ninetiesChristmas =moment("12-25-1995", "MM-DD-YYYY");
console.log(ninetiesChristmas.add(7, 'days'));