import { Item } from "../types/Item";
import { db } from "../db";
import { RowDataPacket } from "mysql2";

export const findOne = (itemId: number, itemTitle: string, callback: Function) => {
    const queryString = `SELECT * FROM item WHERE id=? AND title=?`;

    db.query(queryString, [itemId, itemTitle], (err, result) => {
        if (err) { callback(err) }

        const row = (<RowDataPacket>result)[0];
        const item: Item = {
            title: row.title,
            photoURL: row.photo_url,
            description: row.description,
            shortDescription: row.short_description
        }
        callback(null, item);
    });
}

export const findAll = (itemTitle: string, callback: Function) => {
    const queryString = `SELECT * FROM item WHERE title like ?`

    db.query(queryString, itemTitle, (err, result) => {
        if (err) { callback(err) }

        const rows = <RowDataPacket[]>result;
        const items: Item[] = [];

        rows.forEach(row => {
            const item: Item = {
                title: row.title,
                photoURL: row.photo_url,
                description: row.description,
                shortDescription: row.short_description
            }
            items.push(item);
        });
        callback(null, items);
    });
}