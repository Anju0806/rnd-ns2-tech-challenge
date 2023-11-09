import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the Room schema
interface IRoom {
    roomId: Number,
    name: string;
    companyIds: number[];
}

interface IRoomDocument extends IRoom, Document { }

const roomSchema: Schema<IRoomDocument> = new Schema({
    roomId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    companyIds:  [{ type: Number, ref: 'Company' }],
});

// Room model
const RoomModel: Model<IRoomDocument> = mongoose.model('Room', roomSchema);

export default RoomModel;
