const net = require("net");
const { IP, PORT, playerName } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    console.log("Name: ", playerName);
  });

  // Sends message when client times out or player dies
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};