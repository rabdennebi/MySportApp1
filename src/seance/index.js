import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'native-base';
import { VStack, Center, NativeBaseProvider } from "native-base";
import getStyleSheet from './styles';
import useGlobalState from "../../libs/useGlobalState";
import { getDBConnection, getSeanceItems } from '../services/db-service';

export default Database = () => {
    const [{ appearanceMode }] = useGlobalState();
    const [styles, setStyles] = useState(getStyleSheet(false));
    const [seances, setSeances] = useState([{ id: 1, jour: 'Dimanche', libeller_court: 'Seance 1', libeller_long: 'S1' }]);
    const [db, setDB] = useState([]);

    useEffect(() => {
        setStyles(getStyleSheet(appearanceMode));
    }, [appearanceMode]);

    useEffect(() => {
        getDBConnection();
        setSeances(getSeanceItems());
    }, []);

    return (
        <VStack space={4} alignItems="center">
            {
              seances.map((seance) => {
                   //return  <Text>{seance.libeller_court}</Text>
                   return <Text>{seance.id} {seance.jour} {seance.libeller_court}</Text>
                   //return <Center size={16} onPress={() => console.log(seanceid)} bg="primary.400" rounded="md" _text={{color: "white"}} shadow={3}>{seance.jour} {seance.libeller_court}</Center>
                })
            }
        </VStack>
    );
}