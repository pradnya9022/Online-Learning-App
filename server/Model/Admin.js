import { Schema , model } from "mongoose";

const CourseSchema = new Schema (
    {
        video : {
           type:String,
           required:true,
        },

        coursename : {
            type:String,
            required:true,
        },

        author : {
            type:String,
            required:true,
        }
    }
)

const Course = model("Course", CourseSchema)
export default Course;