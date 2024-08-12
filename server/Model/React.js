import { Schema , model } from "mongoose";

const React = new Schema(
    {
        video : {
            type : String,
            required : true
        },

        head : {
            type : String,
            required : true
        }
    }
)

const ReactSchema = model("React", React)
export default ReactSchema;