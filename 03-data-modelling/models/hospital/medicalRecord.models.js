import mongoose from 'mongoose'

// for the doctors who treated the patient
const doctorsTreatedSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    problemsTreated: [
        {
            type: String,
            required: true
        }
    ]
})

// medical record schema
const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    diagonsedWith: [
        {
            type: String,
            required: true
        }
    ],
    hospitalAdmittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    doctorsTreated: [ doctorsTreatedSchema ],
    patientCurrentCondition: {
        type: String,
        enum: ["Treatment is Running", "Cured and in Hospital", "Cured and Discharged", "Shifted", "Expired"],
        default: "Treatment is Running"
    },
    bill: {
        type: Number,
        required: true,
        min: 0
    }

}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)