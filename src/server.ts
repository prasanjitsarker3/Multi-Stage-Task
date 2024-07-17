import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://programmingherotask:qvfNCJiQrV12SpIy@cluster0.rkhkj2w.mongodb.net/programmingherotask?retryWrites=true&w=majority&appName=Cluster0"
    );
    // programmingherotask
    // qvfNCJiQrV12SpIy
    app.listen(config.port, () => {
      console.log(`Server listening Port On ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
