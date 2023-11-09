import mongoose from 'mongoose';
import RoomModel from '../models/Room';

const seedRooms = async () => {
  const roomsToSeed = [
    { roomId: 1, name: 'Room 1', companyIds: [1, 2] },
    { roomId:2,name: 'Room 2', companyIds: [2,3] },
    
  ];

  try {
    await RoomModel.insertMany(roomsToSeed);
    console.log('Rooms seeded successfully.');
  } catch (error) {
    console.error('Error seeding rooms:', error);
  }
};

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-challenge',
  {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  }
);

seedRooms();
