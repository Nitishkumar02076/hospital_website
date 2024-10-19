const mongoose = require("mongoose");

// Define a schema for the timings
const timingsSchema = new mongoose.Schema({
  start: {
    type: String,
    required: [true, "start time is required"],
  },
  end: {
    type: String,
    required: [true, "end time is required"],
  },
});

// Main doctor schema
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true, // Ensure unique email addresses
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is required"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feesPerConsultation: {
      type: Number,
      required: [true, "fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: timingsSchema, // Use the timings schema here
      required: [true, "work timing is required"],
    },
  },
  { timestamps: true }
);

// Create the doctor model
const doctorModel = mongoose.model("Doctor", doctorSchema);
module.exports = doctorModel;
