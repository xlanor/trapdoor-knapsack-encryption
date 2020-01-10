import { Dimensions } from 'react-native';
import { COLORS } from '../../../../../constants/Colors';

const containerStyle = {
    backgroundColor: '#fff',
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
}

const titleStyle = {
    fontFamily: 'comfortaa-bold',
    fontSize: 25,
    paddingTop: Dimensions.get('screen').height * 0.02,
    paddingBottom: Dimensions.get('screen').height * 0.01,
    textAlign: 'center',
    textDecorationLine: 'underline'
}
const contentHead = {
    fontFamily: 'comfortaa-bold',
    fontSize: 20,
    textAlign: 'center',
}

const contentStyle = {
    fontFamily: 'comfortaa',
    fontSize: 18,
}

const keyword = {
    fontFamily: 'comfortaa-bold',
    color: 'blue'
}
const bold = {
    fontFamily: 'comfortaa-bold',
}
const links = {
    textDecorationLine: 'underline',
    fontFamily: 'comfortaa',
    color: '#2980B9'
}
const valA = {
    //fontFamily: 'comfortaa-bold',
    color: '#16a085'
}
const valB = {
    //fontFamily: 'comfortaa-bold',
    color: '#f25f5c'
}

const highlight = {
    backgroundColor: '#c7ea46',
}

const underline = {
    textDecorationLine: 'underline'
}

const picStyle = {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    resizeMode: 'stretch',
}
const popUpTextStyle = {

    fontFamily: 'comfortaa',
    fontSize: 14,
    //textAlign: 'center',
    //color: COLORS.ORANGE_1,
    color: '#4d4d4d'
}

const popUpTextStyleBold = {

    fontFamily: 'comfortaa',
    fontSize: 18,
    fontWeight: 'bold',
    //textAlign: 'center',
    //color: COLORS.ORANGE_1,
    color: '#4d4d4d'
}

const imgStyle = {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
}
const imgContainer = {
    height: Dimensions.get('window').height * 0.2
}


export default {
    picStyle,
    containerStyle,
    titleStyle,
    contentHead,
    contentStyle,
    links,
    valA,
    valB,
    keyword,
    underline,
    highlight,
    bold,
    popUpTextStyle,
    popUpTextStyleBold,
    imgStyle,
    imgContainer
};
