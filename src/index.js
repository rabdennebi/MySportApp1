import React, { useState, useEffect } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View } from "react-native";
import { Container, Button } from 'native-base';
import getStyleSheet from './styles';
import Seance from './seance';
import useGlobalState from "../libs/useGlobalState";
import { Appearance } from "react-native";



function Main() {

    const [{ appearanceMode }, { setAppearanceMode }] = useGlobalState();
    //const [{ db }, { setDb}] = useGlobalState();
    const [styles, setStyles] = useState(getStyleSheet(false));


    const renderSeance = ({ item }) => {
        return (
            <View style={{
                flexDirection: "row",
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderBottomWidth: 1,
                borderColor: "ddd",
            }}>
                <Text style={{ marginRight: 9 }}>{item.id}</Text>
                <Text>{item.libeller_long}</Text>
            </View>
        )
    }

    useEffect(() => {
        let subscription = Appearance.addChangeListener(({ colorScheme }) => {
            const isDarkMode = colorScheme === 'dark' ? true : false
            setAppearanceMode(isDarkMode);
            setStyles(getStyleSheet(isDarkMode));
        });

        return () => {
            if (subscription != undefined)
                subscription.remove();
        };
    }, []);

    return (
        <Container
            transparent
            style={styles.container}>
            <Seance />
            <Grid>
                <Col>
                    <Col>
                        <Row style={{ height: 150 }}>
                        </Row>
                        <View style={styles.paddedTop} />
                        <Row style={styles.styledRow} >
                        </Row>
                        <View style={styles.paddedTop} />
                        <Row style={styles.styledRow}>
                        </Row>
                    </Col>
                </Col>
                <View style={styles.paddedLeft} />
            </Grid>
        </Container>
    );
}
export default Main;