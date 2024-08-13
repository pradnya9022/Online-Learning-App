import { Schema , model } from "mongoose";

const Card2 = new Schema(
    {

        img2 : {
            type : "String",
            require : true
        },

        title2 : {
            type : "String",
            require : true
        },

        para2 : {
            type : "String",
            require : true
        },

        rs2 : {
            type : "String",
            require : true
        }
    }
)

const HomeCard2 = model("HomeCard2" , Card2)
export default HomeCard2;