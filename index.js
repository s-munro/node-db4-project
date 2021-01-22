const server = require("./api/server.js");

const PORT = process.env.PORT || 6000;

server.listen(PORT, () => {
  console.log(`Magic happening on port ${PORT}`);
});
