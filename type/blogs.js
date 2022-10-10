import { Sequelize } from "sequelize";
import db from "../db";
 
const { DataTypes } = Sequelize;
 
const blogss = db.define('blogs',{
    first_name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.DOUBLE
    },
    
    age:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default blogs;