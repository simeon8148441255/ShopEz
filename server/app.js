import mongoose from 'mongoose';

const url = 'mongodb+srv://gunasekar:12345@shopez.x9dqx.mongodb.net/?retryWrites=true&w=majority&appName=shopEZ'; // Replace 'your-database-name' with the name of your database

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
