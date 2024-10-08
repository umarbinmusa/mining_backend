import mongoose from"mongoose";
const ConnectDB = (URI) => {
  return mongoose.connect(URI);
};


export default  ConnectDB;
