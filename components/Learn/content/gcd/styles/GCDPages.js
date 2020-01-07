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
const superIncreasingKnapsack = {
    fontFamily: 'comfortaa-bold',
    color: '#C0392B'
}
const privateKey = {
    fontFamily: 'comfortaa-bold',
    color: '#C0392B'
}
const secretKey = {
    fontFamily: 'comfortaa-bold',
    color: '#0404fb'
}

const modulus = {
    fontFamily: 'comfortaa-bold',
    color: '#16A085'
}
const publicKey = {
    fontFamily: 'comfortaa-bold',
    color: '#00b0f0'
}
const multiplier = {
    fontFamily: 'comfortaa-bold',
    color: '#E67E22'
}

const highlight = {
    backgroundColor: '#5afc03',
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


export default {
    picStyle,
    containerStyle,
    titleStyle,
    contentHead,
    contentStyle,
    links,
    keyword,
    underline,
    highlight,
    superIncreasingKnapsack,
    privateKey,
    secretKey,
    modulus,
    publicKey,
    multiplier,
    bold,
    popUpTextStyle,
    popUpTextStyleBold
};
