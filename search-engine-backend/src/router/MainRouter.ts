import { Router } from "express";
import SearchItemsRouter from "./SearchItemsRouter";

class MainRouter {
    private _router = Router();
    private _searchItemsRouter = SearchItemsRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use("/items", this._searchItemsRouter);
    }
}

export = new MainRouter().router;