
import { StyleSheet } from 'react-native';

export const Colors = {
    dark: '#2c2c2c',
    light: '#fcfcfc'
};

const PaddedLeft = {
    paddingLeft: 10
  };
const PaddedTop = {
    paddingTop: 20
  };

const StyledRow = {
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 1,
};
const StyledCol = {
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 1,
    shadowOffset: { width: 0, height: 2 }
};
const Container = {
    marginTop: 30 ,
    marginLeft: 10 ,
    marginRight: 0 ,
    marginBottom: 20 ,
    backgroundColor: "transparent",
};

const lightStyleSheet = StyleSheet.create({
   
    container:{
        ...Container
    },    
    paddedLeft: {
        ...PaddedLeft
    },
    paddedTop: {
        ...PaddedTop
    },
    styledRow: {
        ...StyledRow,
        backgroundColor: Colors.light
    },
    styledCol: {
        ...StyledCol,
        backgroundColor: Colors.light
    }
});

const darkStyleSheet = StyleSheet.create({
   
    container:{
        ...Container
    },   
    paddedLeft: {
        ...PaddedLeft
    },
    paddedTop: {
        ...PaddedTop
    },
    styledRow: {
        ...StyledRow,
        backgroundColor: Colors.dark
    },
    styledCol: {
        ...StyledCol,
        backgroundColor: Colors.dark
    }
});



export default function getStyleSheet(useDarkTheme) {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
