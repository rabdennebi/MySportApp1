import React, { useState, useEffect } from 'react';
import useGlobalState from '../../libs/useGlobalState';
import { openDatabase, DEBUG } from 'react-native-sqlite-storage';
import { DATABASE } from '../Constants';

export const getDBConnection = async () => {
    return openDatabase(
        {
            name: DATABASE.FILE_NAME,
            location: 'default',
            createFromLocation: '~www/' + DATABASE.FILE_NAME,
        },
        () => {
            console.log("successfully " + DATABASE.FILE_NAME);
        },
        error => {
            console.log("ERROR: " + error);
        }
    );
};

export const getTodoItems = async (db) => {
    try {
        const seanceItems = [];
        const results = await db.executeSql(`SELECT DISTINCT * FROM seance`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                seanceItems.push(result.rows.item(index))
            }
        });
        return seanceItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get seanceItems !!!');
    }
};