import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize('expressln_db','epul','epul123', {
    host: "localhost",
    dialect: "mysql"
});

export default db;