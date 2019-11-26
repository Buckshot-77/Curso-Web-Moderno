const lodash = require("lodash");

console.log(lodash.random(1, 1000));

setInterval(() => console.log(lodash.random(1, 1000)), 500);
