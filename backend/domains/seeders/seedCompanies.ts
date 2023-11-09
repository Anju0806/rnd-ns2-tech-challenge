import mongoose from 'mongoose';
import CompanyModel from '../models/Company';

const seedCompanies = async () => {
  const companiesToSeed = [
    { companyId: 1, name: 'Company 1', userIds: [1,2,3,4,5,6,7,8,9,10] },
    { companyId: 2, name: 'Company 2', userIds: [1,2,3,4,5,6,7,8,9,10] },
    { companyId: 3, name: 'Company 3', userIds: [1,2,3,4,5,6,7,8,9,10] },
    { companyId: 4, name: 'Company 4', userIds: [11,12,13,14,15,16,17,18,19,20,21,22] },
    { companyId: 5, name: 'Company 5', userIds: [11,12,13,14,15,16,17,18,19,20,21,22] },
   
  ];

  try {
    await CompanyModel.insertMany(companiesToSeed);
    console.log('Companies seeded successfully.');
  } catch (error) {
    console.error('Error seeding companies:', error);
  }
};

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-challenge',
  {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  }
);

seedCompanies();
