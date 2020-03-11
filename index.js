// Links to Server
const server = require("./api/server");

// Setting up port Dynamically
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});