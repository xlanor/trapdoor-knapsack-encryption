import { Dimensions } from 'react-native';

const containerStyle = {
    backgroundColor: '#fff',
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
}

const titleStyle = {
    fontFamily: 'comfortaa-bold',
    fontSize: 25,
    paddingTop: Dimensions.get('screen').height * 0.01,
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
    textAlign: 'justify',
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
    contentHead,
    contentStyle,
    bold,
    underline,
};
