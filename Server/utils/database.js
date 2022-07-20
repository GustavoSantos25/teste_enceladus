import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('enceladus', 'enceladus', 'Enceladus439*', {
    dialect: 'postgres',
    host: 'mac0439.ckufwvh925mk.sa-east-1.rds.amazonaws.com', 
    define: {
        freezeTableName: true
    }
});

export default sequelize;