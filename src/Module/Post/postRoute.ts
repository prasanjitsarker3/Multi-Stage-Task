import express from "express";
import { blogPostController } from "./postController";
import validateRequest from "../../Middlewares.ts/validationRequest";
import { postValidationSchema } from "./postValidation";

const router = express.Router();
router.post(
  "/create",
  validateRequest(postValidationSchema),
  blogPostController.createUserBlogPost
);
router.get("", blogPostController.getAllPost);

export const blogPostRoutes = router;
