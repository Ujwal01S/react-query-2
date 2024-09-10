import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
});

export default mongoose.model('demo', demoSchema);