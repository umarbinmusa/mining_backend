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
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "Admin",

    }
   
    

});
export default mongoose.model('Task', taskSchema)