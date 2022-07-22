import UnidadeEnsino from "../models/UnidadeEnsino.js";
import SalaEstudos from "../models/SalaEstudos.js";
import Usuario from "../models/Usuario.js";


export const create_usuario = (req, res, next) => {
    UnidadeEnsino.findOne({ where : {
        nome: req.body.unidade_ensino
    }})
    .then(unidade_ensino => {
        if(!unidade_ensino){
            const unidade_ensino = UnidadeEnsino.create(({ nome: req.body.unidade_ensino }))
        }
        Usuario.create(({
            nusp: req.body.nusp,
            telefone: req.body.telefone,
            email: req.body.email,
            tipo: req.body.tipo,
            nome: req.body.nome,
            password: req.body.password,
            unidade_ensino_id: unidade_ensino.id,
            curso: req.body.curso,
            nivel: req.body.nivel,
            status: req.body.status
        }))
        .then(usuario => {
            if(usuario){
                res.sendStatus(200)
            }
        })
        .catch(err => {
            res.sendStatus(409)
        })
    })
}


export const select_usuario_by_nusp = (req, res, next) => {
    Usuario.findOne({ where : {
        nusp : req.params.nusp
    }})
    .then(dbUser => {
        if(dbUser){
            res.status(200).json(dbUser.toJSON())
        }
        else{
            res.sendStatus(404)
        }
    })
    .catch(err => {
        console.log('error', err)
    })
}

export const select_usuarios_by_unidade = (req, res, next) => {
    UnidadeEnsino.findOne({ where : { nome : req.params.unidade_ensino}})
    .then(unidade_ensino => {
        if(unidade_ensino){
            Usuario.findAll({ where : { unidade_ensino_id : unidade_ensino.id }})
            .then(usuarios => {
                res.status(200).json(usuarios)
            })
        }
        else{
            res.sendStatus(404)
        }
    })
}

export const select_usuarios_by_curso = (req, res, next) => {
    Usuario.findAll({ where : { curso : req.params.curso }})
    .then(usuarios => {
        res.status(200).json(usuarios)
    })
}

export const login = (req, res, next) => {
    Usuario.findOne({ where: {
        nusp: req.params.nusp,
        password: req.params.password
    }})
    .then(dbUser => {
        if(dbUser){
            res.status(200).json(dbUser.toJSON())
        }
        else{
            res.sendStatus(404)
        }
    })
}


export const create_unidade_ensino = (req, res, next) => {
    UnidadeEnsino.create(({
        nome: req.body.nome
    }))
}


export const create_sala_estudos = (req, res, next) => {
    UnidadeEnsino.findOne({ where : {
        nome: req.body.unidade_ensino
    }})
    .then(unidade_ensino => {
        if(!unidade_ensino){
            const unidade_ensino = UnidadeEnsino.create(({ nome: req.body.unidade_ensino }))
        }
        SalaEstudos.create(({
            nome: req.body.nome,
            unidade_ensino_id: unidade_ensino.id
        }))
        .then(sala_estudos => {
            if(sala_estudos){
                res.sendStatus(200)
            }
        })
        .catch(err => {
            res.sendStatus(409)
        })
    })
}


export const select_sala_estudos_by_nome = (req, res, next) => {
    SalaEstudos.findOne({ where : { nome: req.params.nome }})
    .then(sala_estudos => {
        if(sala_estudos){
            res.status(200).json(sala_estudos.toJSON())
        }
        else{
            res.sendStatus(404)
        }
    })
}

export const select_sala_estudos_by_unidade = (req, res, next) => {
    UnidadeEnsino.findOne({ where : { nome : req.params.unidade_ensino}})
    .then(unidade_ensino => {
        if(unidade_ensino){
            SalaEstudos.findAll({ where : { unidade_ensino_id : unidade_ensino.id }})
            .then(salas => {
                res.status(200).json(salas)
            })
        }
        else{
            res.sendStatus(404)
        }
    })
}