import { Types, Document, model, Schema } from "mongoose";

interface iCompany {
  companyName: string;
  logo: string;
  staff: Array<{}>;
}

interface iCompanyData extends iCompany, Document {}

const companyModel = new Schema(
  {
    companyName: {
      type: String,
    },
    logo: {
      type: String,
    },

    staff: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],
  },
  { timestamps: true }
);

export default model<iCompanyData>("companies", companyModel);
