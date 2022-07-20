import Usuario from "../models/Usuario.js";

export const create = (req, res, next) => {
    Usuario.create(({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    }))
}

export const select = (req, res, next) => {
    User.findOne({ where : {
        name : "name1"
    }})
    .then(dbUser => {
        if(dbUser){
            res.status(200).json(dbUser.toJSON())
        }
    })
    .catch(err => {
        console.log('error', err)
    })
}