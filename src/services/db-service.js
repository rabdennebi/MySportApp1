import { openDatabase, DEBUG } from 'react-native-sqlite-storage';
import { DATABASE } from '../Constants';

export const getDBConnection = () => {
    console.log("successfully " + DATABASE.FILE_NAME);   
};

export const getSeanceItems = () => {
    return [{ id: 1, jour: 'Dimanche', libeller_court: 'Seance 1', libeller_long: 'S1' },
    { id: 2, jour: 'Mardi', libeller_court: 'Seance 2', libeller_long: 'S2' },
    { id: 3, jour: 'Mercredi', libeller_court: 'Seance 3', libeller_long: 'S3' },
    { id: 4, jour: 'Jeudi', libeller_court: 'Seance 4', libeller_long: 'S4' },
    { id: 5, jour: 'vendredi', libeller_court: 'Seance 5', libeller_long: 'S5' }];
};