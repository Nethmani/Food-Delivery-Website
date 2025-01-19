import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://nethmanipamalka:food123@cluster01.7dpkavk.mongodb.net/Food-Delivery-Website"
    )
    .then(() => console.log("DB Connected"));
};
