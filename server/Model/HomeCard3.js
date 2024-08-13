import { Schema , model } from "mongoose";

const Card3 = new Schema(
    {

        img3 : {
            type : "String",
            require : true
        },

        title3 : {
            type : "String",
            require : true
        },

        para3 : {
            type : "String",
            require : true
        },

        rs3 : {
            type : "String",
            require : true
        }
    }
)

const HomeCard3 = model("HomeCard3" , Card3)
export default HomeCard3;