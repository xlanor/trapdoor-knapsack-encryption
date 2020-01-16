import { COLORS } from '../../../redux-modules/constants/Colors'

import { Dimensions } from 'react-native'

export const scrollViewStyle = {
    backgroundColor: COLORS.WHITE_1,
    marginBottom: Dimensions.get('window').height * 0.05,
    paddingLeft: Dimensions.get('window').width * 0.03,
    paddingRight: Dimensions.get('window').width * 0.03,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.BLACK_1,
    width: '90%',
}

export const blackBackground = {

    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
}
const navbarBackGround = {
    backgroundColor: COLORS.ORANGE_1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 45,
    width: '90%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.BLACK_1,
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingBottom: Dimensions.get('window').height * 0.01,
    paddingRight: Dimensions.get('window').width * 0.01,
}

const navBarTitle = {
    textAlign: 'center',
    fontFamily: 'comfortaa',
    fontSize: 14,
}
const closeIconSize = {
    width: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.03,
}

const closeIconView = {
    alignItems: 'flex-end',
    paddingRight: Dimensions.get('window').height * 0.005,
}
export default {
    scrollViewStyle,
    blackBackground,
    navbarBackGround,
    closeIconSize,
    navBarTitle,
    closeIconView
}