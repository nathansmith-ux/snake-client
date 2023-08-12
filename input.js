const { messageMappings, movementMappings } = require('./constants');

// Stores the active TCP connection object
let connection;

// setup interface to handle user input
const setupInput = (conn)  => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

/**
 * Callback Function that registers command line keyboard inputs
 * @param {string} key
 * @returns Keyboard letter typed, movement or escape command
 */
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (movementMappings[key]) {
    connection.write(movementMappings[key]);
  } else if (messageMappings[key]) {
    connection.write(messageMappings[key]);
  } else {
    console.log("Keyboard input doesn't correspond to a movement key or message key: ", key);
  }
};

module.exports = {
  setupInput,
};