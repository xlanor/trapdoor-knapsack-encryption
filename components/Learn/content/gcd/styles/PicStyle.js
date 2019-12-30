import { Dimensions } from 'react-native';

const picStyle = {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    resizeMode: 'stretch',
}
const containerStyle = {
    height: Dimensions.get('window').height * 0.79,
    //alignItems: 'stretch',
    backgroundColor: '#fff'
}
const titleStyle = {
    fontSize: 25,
    fontFamily: 'comfortaa-bold',
    paddingTop: Dimensions.get('screen').height * 0.01,
    paddingBottom: Dimensions.get('screen').height * 0.01,
    textAlign: 'center',
    textDecorationLine: 'underline'
}

export default {
    picStyle,
    containerStyle,
    titleStyle
};