// setup interface to handle user input from stdin
const setupInput = function () {
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
 * @returns Keyboard letter typed or escape command
 */
const handleUserInput = function (key) {
  console.log("Keyboard input is: ", key);
  if(key === '\u0003') {
    process.exit()
  }
};

module.exports = {
  setupInput,
};