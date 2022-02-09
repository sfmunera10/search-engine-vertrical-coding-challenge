import { NextFunction, Request, Response, Router } from "express";
import ErrorHandler from "../model/ErrorHandler";
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
                const result = this._itemModel.findAll(queryTitle!.toString(), (err: Error, items: Item[]) => {
                    if (err) {
                        throw new ErrorHandler(500, "Server error");
                    }
                    res.status(200).json({ "data": items });
                })
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });

        this._router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            try {
                const paramItemId = req.params["id"];
                const queryTitle = req.query.title;
                this._itemModel.findOne(Number(paramItemId), queryTitle!.toString(), (err: Error, item: Item) => {
                    if (err) {
                        throw new ErrorHandler(500, "Server error");
                    }
                    res.status(200).json({ "data": item });
                })
            }
            catch (error) {
                next(error);
            }
        });
    }
}

export = new SearchItemsRouter().router;