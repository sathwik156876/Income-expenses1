const mongoose = require("mongoose");

//connect
mongoose.set("strictQuery", true);
const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb://sathwikreddyk:MqMttRsLI7yXmRU3@ac-cttgilq-shard-00-00.bezsot1.mongodb.net:27017,ac-cttgilq-shard-00-01.bezsot1.mongodb.net:27017,ac-cttgilq-shard-00-02.bezsot1.mongodb.net:27017/?ssl=true&replicaSet=atlas-r3hrot-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("Db connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
