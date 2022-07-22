import Sequelize from 'sequelize'

import sequelize from "../utils/database.js";
import UnidadeEnsino from './UnidadeEnsino.js';

const SalaEstudos = sequelize.define('sala_estudos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    limite_pessoas: {
        type: Sequelize.INTEGER
    },
    qtd_tomadas: {
        type: Sequelize.INTEGER
    },
    ventilacao: {
        type: Sequelize.BOOLEAN
    },
    presenca_lousa: {
        type: Sequelize.BOOLEAN
    },
    status: {
        type: Sequelize.STRING
    },
    unidade_ensino_id: {
        type: Sequelize.INTEGER,
        references: {
           model: UnidadeEnsino,
           key: 'id'
        }
     },
})

export default SalaEstudos;