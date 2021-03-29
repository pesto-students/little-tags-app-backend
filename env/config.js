import mongoose from "mongoose";
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", false);

const MONGO_URI = `${encodeURI("mongodb://127.0.0.1:27017/smilebag")}`;
const connectOptions = {
  autoReconnect: true,
  useCreateIndex: true,
  // useUnifiedTopology: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
};
export const db = mongoose.createConnection(MONGO_URI, connectOptions);

// handlers
db.on("connecting", () => {
  console.log("\x1b[32m", "MongoDB :: connecting");
});

db.on("error", (error) => {
  console.log("\x1b[31m", "MongoDB :: connection" + error);
  mongoose.disconnect();
});

db.on("connected", () => {
  console.log("\x1b[32m", "MongoDB :: connected");
});

db.once("open", () => {
  console.log("\x1b[32m", "MongoDB :: connection opened");
});

db.on("reconnected", () => {
  console.log('\x1b[33m"', "MongoDB :: reconnected");
});

db.on("reconnectFailed", () => {
  console.log("\x1b[31m", "MongoDB :: reconnectFailed");
});

db.on("disconnected", () => {
  console.log("\x1b[31m", "MongoDB :: disconnected");
});
