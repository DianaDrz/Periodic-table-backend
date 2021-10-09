const bcrypt = require("bcryptjs");
const saltRounds = 10;

function hashPass (text) {
  return bcrypt.hash(text, saltRounds);
}

function compare (text, hash) {
  return bcrypt.compare(text, hash);
}



module.exports = {
  hashPass,
  compare
};
