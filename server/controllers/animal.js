import Animal from "../Models/animal.js";
export const homeRoute = async (req, res) => {
    res.json({
        success: "root route is  working well",
    })
}

export const createRoute = async (req, res) => {
    console.log(req.body.name);
    let animal = await Animal.create(req.body)
    console.log(animal)
    res.status(200).json({
        success: true,
        animal,
    })
}

export const findAllRoute = async (req, res) => {
    let allAnimal = await Animal.find({});
    res.status(200).json({
        success: true,
        allAnimal,
    })
}

export const showRoute = async (req, res) => {
    let { id } = req.params;
    let animal = await Animal.findById(id);
    if (!animal) {
        return res.status(404).json({
            message: `animal with this id does not exist`,
        })
    }
    res.status(200).send({
        success: true,
        animal,
    })
}

export const updateRoute = async (req, res) => {
    let { id } = req.params;
    console.log(req.body);
    let animal = await Animal.findByIdAndUpdate(id, req.body);
    if (!animal) {
        return res.status(404).json({
            message: `student with this id does not exist`,
        })
    }
    let updatedAnimal=await Animal.findById(id);
    res.status(200).send({
        success: true,
        updatedAnimal,
    })
}

export const deleteRoute = async (req, res) => {
    let { id } = req.params;
    let deletedAnimal = await Animal.findByIdAndDelete(id);
    if (!deletedAnimal) {
        return res.status(404).send({
            message: "student with this id does not exist",
        })
    }
    res.status(200).send({
        success: true,
    })
}
