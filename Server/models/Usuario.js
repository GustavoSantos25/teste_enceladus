import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';
import UnidadeEnsino from './UnidadeEnsino.js';

const Usuario = sequelize.define('usuario', {
   nusp: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
   },
   telefone: {
      type: Sequelize.STRING,
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   tipo: {
      type: Sequelize.STRING
   },
   nome: {
      type: Sequelize.STRING,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   unidade_ensino_id: {
      type: Sequelize.INTEGER,
      references: {
         model: UnidadeEnsino,
         key: 'id'
      }
   },
   curso: {
      type: Sequelize.STRING
   },
   nivel: {
      type: Sequelize.STRING
   },
   status: {
      type: Sequelize.STRING
   }
});

export default Usuario;