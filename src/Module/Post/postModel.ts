import { Schema, model } from "mongoose";
import { TPost } from "./postInterface";

const userSchema = new Schema<TPost>(
  {
    fullName: {
      type: String,
    },
    dob: {
      type: String,
    },
    nationality: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    departureDate: {
      type: String,
    },
    returnDate: {
      type: String,
    },
    accommodation: {
      type: String,
    },
    specialRequests: {
      type: String,
    },
    healthDeclaration: {
      type: String,
    },
    emergencyContact: {
      type: String,
    },
    medicalConditions: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = model<TPost>("Post", userSchema);
