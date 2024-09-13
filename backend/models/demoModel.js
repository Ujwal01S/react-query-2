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
    image: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0JsvMgqFaoc2sETK_NJl89I58BkPgYLVLg&s',
    },
});

export default mongoose.model('demo', demoSchema);