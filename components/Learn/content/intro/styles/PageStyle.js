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
    color: COLORS.LINKS_BLUE
}
const superIncreasingKnapsack = {
    fontFamily: 'comfortaa-bold',
    color: COLORS.PRIVATEKEY_COLOR
}
const privateKey = {
    fontFamily: 'comfortaa-bold',
    color: COLORS.PRIVATEKEY_COLOR
}
const secretKey = {
    fontFamily: 'comfortaa-bold',
    color: COLORS.SECRETKEY_COLOR
}

const modulus = {
    fontFamily: 'comfortaa-bold',
    color: COLORS.MODULUS_COLOR
}
const publicKey = {
    fontFamily: 'comfortaa-bold',
    color: COLORS.PUBLICKEY_COLOR
}
const multiplier = {
    fontFamily: 'comfortaa-bold',
    color: COLORS.MULTIPLIER_COLOR
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
    color: COLORS.POPUP_TEXT_COLOR
}

const popUpTextStyleBold = {

    fontFamily: 'comfortaa',
    fontSize: 18,
    fontWeight: 'bold',
    //textAlign: 'center',
    color: COLORS.POPUP_TEXT_COLOR
}

const imgStyle = {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
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
    popUpTextStyleBold,
    imgStyle,
};
