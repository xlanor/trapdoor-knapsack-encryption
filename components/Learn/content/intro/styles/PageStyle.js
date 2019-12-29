import { Dimensions } from 'react-native';

const containerStyle = {
    backgroundColor: '#aaa',
}

const titleStyle = {
    fontFamily: 'comfortaa-bold',
    fontSize: 30,
    textDecorationLine: 'underline',
    paddingTop: Dimensions.get('screen').height * 0.02,
    paddingBottom: Dimensions.get('screen').height * 0.02,
    textAlign: 'center',
}

const contentStyle = {
    fontFamily: 'comfortaa',
    fontSize: 20,
    paddingBottom: Dimensions.get('screen').height * 0.02,
    textAlign: 'center',
}

const bold = {
    fontFamily: 'comfortaa-bold'
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

export default {
    picStyle,
    containerStyle,
    titleStyle,
    contentStyle,
    bold,
    underline,
};
