import { Schema , model } from "mongoose";

const React3 = new Schema(
    {

        video3 : {
            type : String,
            required : true
        },

        head3 : {
            type : String,
            required : true
        }
    }
)

const ReactSchema3 = model("React3", React3)
export default ReactSchema3;