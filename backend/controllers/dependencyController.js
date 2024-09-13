import dependencyModel from "../models/dependencyModel.js";

export const dependencyController = async(req, res) => {
    try {
        const {name} = req.params;
        const dependent = await dependencyModel.findOne({name});
        res.status(200).send({
            success: true,
            message: 'Dependency sent',
            dependent,
        });
    } catch (error) {
        res.status(400).send({
            success:false,
            message:'Error while getting depency',
            error,
        });
    }
};


export const postContoller = async(req, res) => {
    try {
        const {name, age} = req.body;
        const postedDependency = await new dependencyModel({name, age}).save();
        res.status(200).send({
            success:true,
            message:'Post for dependency',
            postedDependency,
        }); 
    } catch (error) {
        res.status(400).send({
            success:false,
            error,
        })
    }
};