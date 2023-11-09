import mongoose from 'mongoose';

const seedAll = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-challenge',
      {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
      }
    );

    // Run individual seeders
    await import('./seedUsers'); // Assuming you have seedUsers.ts
    await import('./seedCompanies'); // Assuming you have seedCompanies.ts
    await import('./seedRooms'); // Assuming you have seedRooms.ts

    console.log('All seeders executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
};

seedAll();
