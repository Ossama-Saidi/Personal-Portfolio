// Main Server File
// This file initializes Express, 
// sets up routes, connects to MongoDB, 
// and serves the application

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/index');

async function main() {

  const uri = "mongodb+srv://ossamasaidi:maCrew-002@cluster.uhky3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

  try {
  await mongoose.connect(uri);
  console.log("I successfully connected to MongoDB!");
} catch (e) {
  console.error(e);
}
}
main().catch(console.error);

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/portfolio');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Use routes from the routes folder
app.use('/', routes);

// Start the server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
