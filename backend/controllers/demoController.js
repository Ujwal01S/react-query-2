import demoModel from "../models/demoModel.js";

export const demoPostController = async(req, res) => {
    try {
        const {fname, lname} = req.body;
        if(!fname || !lname) {
            return res.send({message:'Required fields'});
        }
        const demo = await new demoModel({fname, lname}).save();
        res.status(201).send({
            success:true,
            message:'New post added',
            demo
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error making post',
            error,
        });
    }
};

export const getDemoController = async(req, res) => {
    try {
        const posts = await demoModel.find({});
        res.status(200).send({
            success: true,
            message:'All posts',
            posts,
        });
        console.log(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Can not find',
        });
    }
};


//paginated page
export const pagginatePageContoller = async(req, res) => {
    const limitPerPage = 5;
    const page = req.params.page ? req.params.page : 1;
    try {
        const total = await demoModel.find({}).estimatedDocumentCount();
        const posts = await demoModel.find({})
        .skip((page -1) * limitPerPage)
        .limit(limitPerPage)
        res.status(200).send({
            success: true,
            posts,
            total,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message:'Error while pagginating'
        });
    }
};
