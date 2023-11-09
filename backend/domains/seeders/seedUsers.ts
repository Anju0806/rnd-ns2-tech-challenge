//seedUsers.ts

import  UserModel  from '../models/User'; // Import your User model
import mongoose from 'mongoose';

const seedUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-challenge',
      {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
      }
    );

    // Define the sample users with companyIds
    const sampleUsers = [

        {
          userId: 1,
          username: 'user1',
          companyIds: [1, 2, 3],
        },
        {
          userId: 2,
          username: 'user2',
          companyIds: [1, 2, 3],
        },
        {
          userId: 3,
          username: 'user3',
          companyIds: [1, 2, 3],
        },
        {
          userId: 4,
          username: 'user4',
          companyIds: [1, 2, 3],
        },
        {
          userId: 5,
          username: 'user5',
          companyIds: [1, 2, 3],
        },
        {
          userId: 6,
          username: 'user6',
          companyIds: [1, 2, 3],
        },
        {
          userId: 7,
          username: 'user7',
          companyIds: [1, 2, 3],
        },
        {
          userId: 8,
          username: 'user8',
          companyIds: [1, 2, 3],
        },
        {
          userId: 9,
          username: 'user9',
          companyIds: [1, 2, 3],
        },
        {
          userId: 10,
          username: 'user10',
          companyIds: [1, 2, 3],
        },
       /*  {
          userId: 11,
          username: 'user11',
          companyIds: [4, 5],
        },
        {
          userId: 12,
          username: 'user12',
          companyIds: [4, 5],
        },
        {
          userId: 13,
          username: 'user13',
          companyIds: [4, 5],
        },
        {
          userId: 14,
          username: 'user14',
          companyIds: [4, 5],
        },
        {
          userId: 15,
          username: 'user15',
          companyIds: [4, 5],
        },
        {
          userId: 16,
          username: 'user16',
          companyIds: [4, 5],
        },
        {
          userId: 17,
          username: 'user17',
          companyIds: [4, 5],
        },
        {
          userId: 18,
          username: 'user18',
          companyIds: [4, 5],
        },
        {
          userId: 19,
          username: 'user19',
          companyIds: [4, 5],
        },
        {
          userId: 20,
          username: 'user20',
          companyIds: [4, 5],
        },
        {
          userId: 21,
          username: 'user21',
          companyIds: [4, 5],
        },
        {
          userId: 22,
          username: 'user22',
          companyIds: [4, 5],
        }, */
     
      

    ];

    // Insert users into the database
    await UserModel.insertMany(sampleUsers);

    console.log('User seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
};

seedUsers();
