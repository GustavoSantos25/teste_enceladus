import Sequelize from 'sequelize';

import sequelize from '../utils/database.js';

const UnidadeEnsino = sequelize.define('unidade_ensino', {
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
    rua: {
        type: Sequelize.STRING,
    },
    numero: {
        type: Sequelize.INTEGER
    }
})

export default UnidadeEnsino;