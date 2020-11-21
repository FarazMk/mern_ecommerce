const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const products = require("./data/products.js");
const Product = require("./models/Product.js");

// Load env vars
dotenv.config({ path: "./backend/config/config.env" });

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const importData = async () => {
  try {
    const sampleProducts = products.map(product => {
      return { ...product };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!...".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data Destroyed!...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else if (process.argv[2] === "-i") {
  importData();
}
