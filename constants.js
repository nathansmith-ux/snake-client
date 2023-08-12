const IP = "localhost";
const PORT = 50541;
const playerName = "N8S";

const messageMappings = {
  f: "Say: You're doing amazing!",
  e: "Say: Will I ever be full?",
  q: "Say: Ahhh a wall!",
  x: "Say: You're getting big!"
};

const movementMappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};


module.exports = {
  IP,
  PORT,
  playerName,
  messageMappings,
  movementMappings
};