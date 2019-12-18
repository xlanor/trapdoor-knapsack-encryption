import { COLORS } from '../../../../../constants/Colors';

import { Dimensions } from 'react-native';

const textStyle = {
    fontFamily: 'comfortaa',
    fontSize: 20,
    textAlign: 'center',
}

const textStyleBold = {
    fontFamily: 'comfortaa-bold',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
}

const flexContainerWrapper = {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
}

const buttonWrapper = {
    paddingLeft: Dimensions.get('window').width * 0.4,
}

const rowView = {
    flex:2, justifyContent: 'center'
}
export default {
    textStyle,
    textStyleBold,
    flexContainerWrapper,
    buttonWrapper,
    rowView,
}
