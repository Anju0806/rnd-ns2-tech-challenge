import { Document, Model, Schema, model } from 'mongoose';

// Define the Room schema
interface ICompany {
  companyId: Number,
  name: string;
  userIds: number[];
}

interface ICompanyDocument extends Document, ICompany {}

const companySchema: Schema<ICompanyDocument> = new Schema({
  companyId: {
    type: Number, 
    required: true,
  },
 
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
 
  userIds: [{ type: Number, ref: 'User' }],
  
});

const CompanyModel: Model<ICompanyDocument> = model('Company', companySchema);

export default CompanyModel;
