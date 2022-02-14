import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import MainRouter from "./router/MainRouter";
import { ErrorHandler } from "./utils";
import cors from "cors";
import helmet from "helmet"

// load the environment variables from the .env file
dotenv.config({
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    public app = express();
    public router = MainRouter;
}

// initialize server app
const server = new Server();

//Use helmet
server.app.use(helmet());

// Accept CORS only from React Frontend Client Origin
server.app.use(cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    credentials: true,
}));

// make server app handle any route starting with "/api"
server.app.use("/api", server.router);

// Handle Not Found routes
server.app.use("*", (_: Request, __: Response, next: NextFunction) => {
    next(new ErrorHandler(404, "NOT_FOUND_ERROR", "Resource not found"));
});

// make server app handle any error
server.app.use((err: ErrorHandler, _: Request, res: Response, __: NextFunction) => {
    res.status(err.statusCode || 500).json({
        status: "error",
        errorCode: err.errorCode,
        statusCode: err.statusCode,
        message: err.errorMessage
    });
});

// make server listen on some port
((port = process.env.NODE_LOCAL_PORT || 8080) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();