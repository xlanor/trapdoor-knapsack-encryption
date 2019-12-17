import { COLORS } from '../../../constants/Colors'

import { Dimensions } from 'react-native'

const safeAreaWrapper = {
    backgroundColor: "red",
    height: '100%',
};

const modalBackground = {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
};
const textStyleMessage = {
    paddingTop: Dimensions.get('window').height * 0.01,
    fontFamily: 'comfortaa',
    fontSize: 20,
    paddingLeft: Dimensions.get('window').width * 0.1,
    paddingRight: Dimensions.get('window').width * 0.1,
    textAlign: 'center',
}
const textAreaBackGround = {
    backgroundColor: COLORS.WHITE_1,
    flex:1,
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width * 0.1,
    marginRight: Dimensions.get('window').width * 0.1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
}

const textAreaWrapper = {
    flex: 1,
    alignItems: 'center',
}

const navbarBackGround = {
    backgroundColor: COLORS.YELLOW_1,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 45,
    marginLeft: Dimensions.get('window').width * 0.1,
    marginRight: Dimensions.get('window').width * 0.1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
}

const closeStyle = {
    marginRight: Dimensions.get('window').width * 0.01,

}
const imageView = {
    paddingTop: Dimensions.get('window').height * 0.012, 

}
const imageStyle = {
    maxHeight: Dimensions.get('window').height * 0.08,
    maxWidth: Dimensions.get('window').height * 0.08,
}

export default{
    safeAreaWrapper,
    modalBackground,
    textAreaBackGround,
    navbarBackGround,
    closeStyle,
    textAreaWrapper,
    textStyleMessage,
    imageStyle,
    imageView,
};