import mongoose from "mongoose"

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    customerAssign: {
         type: [String], 
  default: []
    },
    status: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Team = mongoose.model("Team", TeamSchema);

export default Team;