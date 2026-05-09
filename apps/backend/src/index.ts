import express, { Request, Response, NextFunction } from "express";
import cors, { CorsOptions } from "cors";
import helmet from "helmet";
import env from "./config/env";
import router from "./routes/index";
import { errorHandler } from "./middlewares/error.middleware";
import { AppError } from "./types/error";
import { requestLogger } from "./middlewares/logger.middleware";
import seedSuperAdmin from "./seed/seed";

const app = express();

// CORS configuration
const corsOptions: CorsOptions = {
  origin: env.ALLOWED_ORIGINS,
  credentials: true,
};
app.use(cors(corsOptions));

// middleware
app.use(requestLogger);
app.use(helmet());
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

app.listen(env.PORT, async () => {
  console.log(`Server running on http://localhost:${env.PORT} in ${env.NODE_ENV} mode`);
  await seedSuperAdmin();
});

export default app;
