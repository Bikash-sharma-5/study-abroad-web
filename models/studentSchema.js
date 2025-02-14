const { Schema, model } = require("mongoose");

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  education: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    
  address: {
      type: String,
      required: true,
    },
   
    
    
    contactNo: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    countryPreference: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = model("student", studentSchema);

module.exports = Student;
