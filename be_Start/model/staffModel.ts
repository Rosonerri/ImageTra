import { Types, Document, model, Schema } from "mongoose";

interface iStaff {
  staffName: string;
  profile: string;
  taskCompleted: number;
  images: Array<string>;
  company: {};
}

interface iStaffData extends iStaff, Document {}

const staffModel = new Schema<iStaffData>(
  {
    staffName: {
      type: String,
    },
    profile: {
      type: String,
    },
    taskCompleted: {
      type: Number,
    },

    images: [
      {
        type: String,
      },
    ],

    company: {
      type: Types.ObjectId,
      ref: "companies",
    },
  },
  { timestamps: true }
);

export default model<iStaffData>("staffs", staffModel);
