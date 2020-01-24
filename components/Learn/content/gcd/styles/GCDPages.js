import { Dimensions } from 'react-native';
import { COLORS } from '../../../../../redux-modules/constants/Colors';

const containerStyle = {
    backgroundColor: '#fff',
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
}

const titleStyle = {
    fontFamily: 'comfortaa-bold',
    fontSize: 25,
    marginTop: Dimensions.get('screen').height * 0.02,
    marginBottom: Dimensions.get('screen').height * 0.02,
    textAlign: 'center',
    textDecorationLine: 'underline'
}
const contentHead = {
    fontFamily: 'comfortaa-bold',
    fontSize: 25,
    textAlign: 'center',
}
const contentStyle = {
    fontFamily: 'comfortaa',
    fontSize: 18,
}
const contentStyleSmall = {
    fontFamily: 'comfortaa',
    fontSize: 14,
}
const contentStyleBig = {
    fontFamily: 'comfortaa',
    fontSize: 23
}

const bold = {
    fontFamily: 'comfortaa-bold',
}
const links = {
    textDecorationLine: 'underline',
    fontFamily: 'comfortaa',
    color: COLORS.LINKS_BLUE
}
const GCDStyle = {
    color: COLORS.GCD_COLOR,
}
const valA = {
    color: '#16a085'
}
const valB = {
    color: '#f25f5c'
}
const inverseStyle = {
    color: COLORS.MULTIPLIER_INVERSE_COLOR,
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
    color: COLORS.POPUP_TEXT_COLOR
}
const popUpTextStyleBold = {
    fontFamily: 'comfortaa-bold',
    fontSize: 18,
    color: COLORS.POPUP_TEXT_COLOR
}

const imgStyle = {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
}
const imgContainer = {
    height: Dimensions.get('window').height * 0.25
}


const unlockIconStyle = {
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
  }
export default {
    picStyle,
    containerStyle,
    titleStyle,
    contentHead,
    contentStyle,
    contentStyleSmall,
    contentStyleBig,
    links,
    GCDStyle,
    valA,
    valB,
    inverseStyle,
    underline,
    highlight,
    bold,
    popUpTextStyle,
    popUpTextStyleBold,
    imgStyle,
    imgContainer,
    unlockIconStyle,
};
