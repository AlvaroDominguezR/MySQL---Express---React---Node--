import db from "../database/db";

import { DataType, DataTypes } from "sequelize";

const BLogModel = db.define('blogs', {
     tittle: {type: DataTypes.STRING},
     content: {type: DataTypes.STRING},
 })


 export default BLogModel