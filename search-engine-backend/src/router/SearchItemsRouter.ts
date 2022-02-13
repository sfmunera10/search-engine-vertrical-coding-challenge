import { NextFunction, Request, Response, Router } from "express";
import { ErrorHandler } from "../utils";
import * as itemModel from "../model/ItemModel";
import { Item } from "../entities/Item";
import { validatorArrays } from "../utils";
import { validationResult } from "express-validator";

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
        this._router.get("/", validatorArrays.allByTitle, (req: Request, res: Response, next: NextFunction) => {
            try {
                const errors = validationResult(req).array();
                if (errors.length) {
                    next(new ErrorHandler(400, "BAD_REQUEST_ERROR", JSON.stringify(errors) || "Bad request"));
                }
                const queryTitle = req.query.title;
                this._itemModel.findAllByTitle(queryTitle!.toString(), (err: ErrorHandler, items: Item[]) => {
                    if (err) { res.status(err.statusCode).json(err); }
                    res.status(200).json({ "data": items });
                })
            }
            catch (error: any) {
                next(new ErrorHandler(500, "SERVER_ERROR", error.message || "Bad request"));
            }
        });

        this._router.get("/:id", validatorArrays.oneByIdAndTitle, (req: Request, res: Response, next: NextFunction) => {
            try {
                const errors = validationResult(req).array();
                if (errors.length) {
                    next(new ErrorHandler(400, "BAD_REQUEST_ERROR", JSON.stringify(errors) || "Bad request"));
                }
                const paramItemId = req.params["id"];
                const queryTitle = req.query.title;
                this._itemModel.findOneByIdAndTitle(Number(paramItemId), queryTitle!.toString(), (err: ErrorHandler, item: Item) => {
                    if (err) { res.status(err.statusCode).json(err); }
                    res.status(200).json({ "data": item });
                })
            }
            catch (error: any) {
                next(new ErrorHandler(500, "SERVER_ERROR", error.message || "Something went wrong"));
            }
        });
    }
}

export = new SearchItemsRouter().router;