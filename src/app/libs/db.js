import mongoose from "mongoose";

const DbCon = async () => {
  try {
    mongoose.connect(process.env.MONGOdbURL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB is not Connecting", error);
  }
};
export default DbCon;
