const { randomUUID } = require("crypto");

function randomID() {
  return randomUUID();
}

module.exports = { randomID };
