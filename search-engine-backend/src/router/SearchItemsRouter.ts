import { NextFunction, Request, Response, Router } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import * as itemModel from "../model/ItemModel";
import { Item } from "../types/Item";

class SearchItemsRouter {
    private _router = Router();
    private _itemModel = itemModel;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
            try {
                const queryTitle = req.query.title;
                this._itemModel.findAll(queryTitle!.toString(), (err: ErrorHandler, items: Item[]) => {
                    if (err) { res.status(err.statusCode).json(err); }
                    res.status(200).json({ "data": items });
                })
            }
            catch (error:any) {
                next(new ErrorHandler(500, "SERVER_ERROR", error.message || "Something went wrong"));
            }
        });

        this._router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            try {
                const paramItemId = req.params["id"];
                const queryTitle = req.query.title;
                this._itemModel.findOne(Number(paramItemId), queryTitle!.toString(), (err: ErrorHandler, item: Item) => {
                    if (err) { res.status(err.statusCode).json(err); }
                    res.status(200).json({ "data": item });
                })
            }
            catch (error:any) {
                next(new ErrorHandler(500, "SERVER_ERROR", error.message || "Something went wrong"));
            }
        });
    }
}

export = new SearchItemsRouter().router;