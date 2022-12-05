// 2. importacion de conexion a la base de datos
import db from "../database/db.js";
// importacion de sequalize
import {  DataTypes } from "sequelize";

const BlogModels = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default BlogModels

