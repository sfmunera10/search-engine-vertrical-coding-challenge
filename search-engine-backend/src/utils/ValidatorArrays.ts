import { param, query } from "express-validator";

export const validatorArrays = {
    allByTitle: [
        query("title").exists()
            .isLength({ min: 0, max: 50 })
            .withMessage("Title is mandatory and must be between 0 and 50 characters long")
    ],
    oneByIdAndTitle: [
        param("id").exists().toInt()
            .isInt({ min: 1, max: 2147483647 })
            .withMessage("ID is mandatory and must be a positive integer between the values of 1 and 2147483647"),
        query("title").exists()
            .isLength({ min: 0, max: 50 })
            .withMessage("Title is mandatory and must be between 0 and 50 characters long")
    ]
};