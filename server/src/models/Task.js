import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema= new Schema({
    url: {
        type: String,
    },
    name: {
        type: String,
    },
    verify: {
        type: String,
    },
    

});
export default mongoose.model('Task', taskSchema)