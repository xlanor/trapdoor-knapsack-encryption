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
    fontSize: 30,
    fontFamily: 'comfortaa-bold',
    textAlign: 'center',
}

export default {
    picStyle,
    containerStyle,
    titleStyle
};