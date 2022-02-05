import { openDatabase, DEBUG } from 'react-native-sqlite-storage';
import { DATABASE } from '../Constants';

export const getDBConnection = async () => {
    DEBUG(true);
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
};/*
export const getSeanceItemsD = async (db) => {
    await db.transaction((tx) => {
         await tx.executeSql("SELECT DISTINCT * FROM seance",
             [], (sqlTxn, res) => {
                 console.log("Select getAllSeance successfully");
                 let len = res.rows.length;
                 let results = [];
                 if (len > 0) {
                     for (let i = 0; i < len; i++) {
                         let item = res.rows.item(i);                 
                         results.push({ id: item.id, libeller_long: item.libeller_long, libeller_court: item.libeller_court });
                     }
                 }
                 console.log(results);
             },
             error => {
                 console.log("error" + error.message);
             }
         )
     })
 };*/
/*
export const getSeanceItems = async (db) => {
    try {
        const seanceItems = [];
        await db.transaction((tx) => {             
            const results =  tx.executeSql("SELECT DISTINCT id, jour, libeller_long, libeller_court FROM seance", 
            [], (sqlTxn, res) => {
                console.log("getSeanceItems");
                console.log(results);
                //let len = results.rows.length;
                if(results){
                    results.forEach(result => {
                        for (let index = 0; index < result.rows.length; index++) {
                            seanceItems.push({ id: result.id, libeller_long: result.libeller_long, libeller_court: result.libeller_court });
                        }
                    }); 
                }   
            },
            error => {
                console.log("error" + error.message);
            });                 
        })
       
        return seanceItems;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get seanceItems !!!');
    }
};
*/
export const getSeanceItems = async (db) => {

    console.log("getSeanceItems");
    return new Promise((resolve) => {
        const seanceItems = [];
        console.log("Promise");
        db.transaction((tx) => {

        console.log("transaction");
            tx.executeSql('SELECT DISTINCT id, jour, libeller_long, libeller_court FROM seance', []).then(([tx, results]) => {
                console.log("Query completed");
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    console.log(`Prod ID: ${row.id}, Prod Name: ${row.libeller_long}`)
                    const { id, libeller_long, prodlibeller_courtImage } = row;
                    seanceItems.push({ id, libeller_long, libeller_court });
                }
                console.log(seanceItems);
                resolve(seanceItems);
            });
        }).then((result) => {
            this.closeDatabase(db);
        }).catch((err) => {
            console.log(err);
        });
    });
};
export const saveSeanceItems = async (db) => {
    return db.executeSql("INSERT INTO seance (id, jour, libeller_long, libeller_court) VALUES"
        + "  (1, 'Dimanche', 'Seance 1', 'S1'), (2, 'Mardi', 'Seance 2', 'S2'),"
        + "  (3, 'Mercredi', 'Seance 3', 'S3'), (4, 'Jeudi', 'Seance 4', 'S4'),"
        + "  (5, 'vendredi', 'Seance 5', 'S5');", [],
        (sqlTxn, res) => { console.log("INSERT INTO seance "); },
        error => { console.log("error on creating table " + error.message); })
}
export const creatSeanceItems = async (db) => {
    return db.executeSql("INSERT INTO seance (id, jour, libeller_long, libeller_court) VALUES"
        + "  (1, 'Dimanche', 'Seance 1', 'S1'), (2, 'Mardi', 'Seance 2', 'S2'),"
        + "  (3, 'Mercredi', 'Seance 3', 'S3'), (4, 'Jeudi', 'Seance 4', 'S4'),"
        + "  (5, 'vendredi', 'Seance 5', 'S5');", [],
        (sqlTxn, res) => { console.log("INSERT INTO seance "); },
        error => { console.log("error on creating table " + error.message); })
}