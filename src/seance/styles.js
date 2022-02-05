
import { StyleSheet } from 'react-native';

export const Colors = {
    dark: '#2c2c2c',
    light: '#fcfcfc'
};



const lightStyleSheet = StyleSheet.create({
   
    
});

const darkStyleSheet = StyleSheet.create({
   
   
});



export default function getStyleSheet(useDarkTheme) {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
