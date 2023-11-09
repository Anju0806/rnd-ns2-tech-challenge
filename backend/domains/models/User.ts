import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the User schema
interface UserDocument extends Document {
  userId: number;
  username: string;
  companyIds: number[];
}

const userSchema: Schema<UserDocument> = new Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  companyIds:  [{ type: Number, ref: 'Company' }],
});

// the User model
const UserModel: Model<UserDocument> = mongoose.model('User', userSchema);

export default UserModel;
