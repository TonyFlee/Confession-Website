const app = require('./app');
const connectDB = require('./config/db');

// Load environment variables
require('dotenv').config();

// Connect to the database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
