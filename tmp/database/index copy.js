import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import {   FlatList } from 'native-base';
import getStyleSheet from '../seance/styles';
import { getAllSeance } from './Database';
import useGlobalState from "../../libs/useGlobalState";
import { Button } from 'native-base';


  
export default Database = () => {    
    const [{ appearanceMode }] = useGlobalState();
    const [styles, setStyles] = useState(getStyleSheet(false));
    const [seances, setSeances] = useState([]);
    
    useEffect(() => {
        setStyles(getStyleSheet(appearanceMode));
    }, [appearanceMode]);

    useEffect(() => {
        console.log("getAllSeance2");
        //console.log(getAllSeance());
        //setSeances(getAllSeance());
        //console.log(seances);
        //SQLiteScreen
        setStyles(getStyleSheet(appearanceMode));
    }, []);
    
    const renderSeance = ({ item })=> {
        return (
            <View style={{
                flexDirection:"row",
                paddingVertical: 12,
                paddingHorizontal:10,
                borderBottomWidth:1,
                borderColor:"ddd",
            }}>
                <Text style={{marginRight:9}}>{item.id}</Text>
                <Text>{item.libeller_long}</Text>
            </View>
        )
    }
    const getSeance = ()=> {
        /*console.log("getAllSeance3");
        console.log(getAllSeance());
        setSeances(getAllSeance());
         <Text>createTables</Text>
            <Button onPress={createTables}></Button>
            <Text>initData</Text>
            <Button onPress={initData}></Button>
            <Text>getSeance</Text>
        */
        getAllSeance();
    }
    return (   
        <>
           
            <Button onPress={getSeance}></Button>
            <FlatList data={seances} renderItem={renderSeance} />
        </>  
    );
}