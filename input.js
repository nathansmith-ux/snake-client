const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, keyMappings } = require('./constants')

// Stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
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
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (keyMappings[key]) {
    connection.write(keyMappings[key]);
  } else {
    console.log("Keyboard input doesn't correspond to a movement key or message key: ", key);
  }
};

module.exports = {
  setupInput,
};