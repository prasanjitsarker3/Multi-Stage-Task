import { Router } from "express";
import { blogPostRoutes } from "../Module/Post/postRoute";

const router = Router();

const moduleRoutes = [
  {
    path: "/post",
    route: blogPostRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
