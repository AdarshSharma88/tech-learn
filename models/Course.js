import mongoose from "mongoose";
const schema = new mongoose.Schema({
title:{
    type:String,
    required:[true,"Please enter course title"],
    minLength:[4,"Must be 4"],
    maxLenght:[80,'cannot exceed 80']
},
description:{
    type:String,
    required:[true,""],
    minLength:[6,"Atleasdt 20"],
},
lectures:[
  {
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    video:{
        public_id:{
            type:String,
            required:true,
        },  url:{
            type:String,
            required:true,
        },
    },
    
   
    
    
  } , 
],

poster:{
    public_id:{
        type:String,
        required:true,
    },  url:{
       type:String,
        required:true,
    },
},
views:{
    type:Number,
    default:0,
},
numOfVideos:{
    type:Number,
    default:0,
},
category:{
    type:String,
    required:true,
},createdBy:{
    type:String,
    required:[true,"Enter course creator name"],
},createdAt:{
    type:Date,
    required:false,
},

});

export const Course = mongoose.model("Course",schema);
export default Course;