import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import env from "./config/env";
import router from "./routes/index";
import { errorHandler } from "./middlewares/error.middleware";
import { AppError } from "./types/error";

const app = express();

// middleware
app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health check
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", env: env.NODE_ENV, timestamp: new Date().toISOString() });
});

// all routes under /api
app.use("/api", router);

// unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// error middleware
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT} in ${env.NODE_ENV} mode`);
});

export default app;
