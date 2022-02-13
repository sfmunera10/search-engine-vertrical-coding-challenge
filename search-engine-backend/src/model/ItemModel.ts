import { Item } from "../types/Item";
import { db } from "../db";
import { RowDataPacket } from "mysql2";
import ErrorHandler from "../utils/ErrorHandler";

export const findOne = (itemId: number, itemTitle: string, callback: Function) => {
    const queryString = `SELECT * FROM item WHERE id=? AND title=?`;

    db.query(queryString, [itemId, itemTitle], (err, result) => {
        if (err) { callback(new ErrorHandler(500, "DB_ERROR", err.message)); }

        const row = (<RowDataPacket>result)[0];
        const item: Item | undefined = row ? {
            id: row.id,
            title: row.title,
            photoURL: row.photo_url,
            description: row.description,
            shortDescription: row.short_description
        } : undefined

        if (!item) { callback(new ErrorHandler(404, "NOT_FOUND_ERROR", "Item not found")); }

        callback(null, item);
    });
}

export const findAll = (itemTitle: string, callback: Function) => {
    const itemTitleMatch = `%${itemTitle}%`;
    const queryString = `SELECT * FROM item WHERE title like ?`;

    db.query(queryString, itemTitleMatch, (err, result) => {
        if (err) { callback(new ErrorHandler(500, "DB_ERROR", err.message)); }

        const rows = <RowDataPacket[]>result;
        const items: Item[] = [];

        rows.forEach(row => {
            const item: Item = {
                id: row.id,
                title: row.title,
                photoURL: row.photo_url,
                description: row.description,
                shortDescription: row.short_description
            }
            items.push(item);
        });

        if (!items.length) { callback(new ErrorHandler(404, "NOT_FOUND_ERROR", "Items not found")); }

        callback(null, items);
    });
}