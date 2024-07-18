import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./Middlewares.ts/globalErrorHandler";
import notFound from "./Middlewares.ts/notFound";
import router from "./Route/routes";
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "https://multi-stage.vercel.app" }));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running !");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
