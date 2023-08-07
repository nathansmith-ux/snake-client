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
  if(key === '\u0003') {
    process.exit()
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else {
    console.log("Keyboard input is not w, a, s or d: ", key);
  }
};

module.exports = {
  setupInput,
};