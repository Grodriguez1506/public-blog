import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://garj1706:84efnpWs7YLpX793@cluster0.3rdlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
