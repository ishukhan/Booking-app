import colors from "colors";
import mongoose from "mongoose";

const connect = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log(colors.bgMagenta("Connected mongoDB")))
    .catch((err) => {
      console.error(colors.red("failed to connect with mongo"));
      console.error(err);
    });

  mongoose.connection.on("disconnected", () => {
    console.log(colors.bgRed("mongoDB disconnected"));
  });
};

export default connect;
