import mongoose from "mongoose";

const dependencySchema = new mongoose.Schema({
    name : {
        type: String,
        default: 'defaultName'
    },
    age:{
        type: String,
        default: '22'
    },
});

const dependency = mongoose.model('depends', dependencySchema);

export default dependency;