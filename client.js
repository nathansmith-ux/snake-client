const net = require("net");
const { IP, PORT, playerName } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // Sends message when client is connected to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server, Welcome Player ", playerName);
  })

  // Sends message when client times out
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = {
  connect
}