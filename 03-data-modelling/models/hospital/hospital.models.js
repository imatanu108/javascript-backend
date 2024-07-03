import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String
        }
    ],
    doctorsAvailable: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }
    ]
}, {timestamps: true});

export const Hospital = mongoose.model("Hospital", hospitalSchema)