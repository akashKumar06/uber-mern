import app from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at port ${process.env.PORT}🌟`);
    });
  })
  .catch((err) => {
    console.log(`Database error: ${err}`);
  });
