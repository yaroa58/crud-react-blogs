// 1. importacion de sequalize 

import { Sequelize } from "sequelize";

const db = new Sequelize('database_crus_laravel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db