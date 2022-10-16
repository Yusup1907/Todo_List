const app = require("./app");
const PORT = process.env.port || 5000;

// Handling uncaught Exception




// Creat Server

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});



// Unhandled promise rejection

