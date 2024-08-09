import { Schema , model } from "mongoose";

const Card = new Schema(
    {

        img : {
            type : "String",
            require : true
        },

        title : {
            type : "String",
            require : true
        },

        para : {
            type : "String",
            require : true
        },

        rs : {
            type : "String",
            require : true
        },
    }
)

const HomeCard = model("HomeCard" , Card)
export default HomeCard;