import { connect } from "mongoose";

const URL = "mongodb://127.0.0.1:27017/refDB";
export const dbConfig = () => {
  try {
    connect(URL).then(() => {
      console.log();
      console.log("connected");
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
