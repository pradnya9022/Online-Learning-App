import { Schema , model } from "mongoose";

const React2 = new Schema(
    {

        video2 : {
            type : String,
            required : true
        },

        head2 : {
            type : String,
            required : true
        }
    }
)

const ReactSchema2 = model("React2", React2)
export default ReactSchema2;