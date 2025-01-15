import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://stgoshitha:blackshadow1234@itpprojectdb.hnxylj7.mongodb.net/Food-Delivery-Website?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connected"));
};
