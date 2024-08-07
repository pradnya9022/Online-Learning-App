import { Schema,model } from "mongoose";

const SchemaHome = new Schema(
    {
        // img :{
        //     type : String,
        //     required:true
        // },

        content : {
            type: String,
            required:true
        },

        Name :{
            type:String,
            reuired:true
        },

        role : {
            type : String,
            reuired :true
        }
    }
)

const HomeSchema = model("Student-Say" , SchemaHome)
export default HomeSchema;