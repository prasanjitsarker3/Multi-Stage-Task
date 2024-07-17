import { z } from "zod";
export const postValidationSchema = z.object({
  body: z.object({
    fullName: z.string({
      invalid_type_error: "Name is required !",
    }),
    dob: z.string({ required_error: "DOB is required!" }),
    nationality: z.string({ required_error: "Nationality is required!" }),
    email: z.string({ required_error: "Email is required!" }),
    phone: z.string({ required_error: "Phone is required!" }),
    departureDate: z.string({ required_error: "Departure Date is required" }),
    returnDate: z.string({ required_error: "Return Date is required!" }),
    accommodation: z.string({ required_error: "Accommodation is required" }),
    specialRequests: z.string().optional(),
    healthDeclaration: z.string({ required_error: "Health Declaration" }),
    emergencyContact: z.string({ required_error: "Emergency Contact" }),
    medicalConditions: z.string().optional(),
  }),
});
