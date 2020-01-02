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
}

const keyword = {
    fontFamily: 'comfortaa-bold',
    color: 'blue'
}
const bold = {
    fontFamily: 'comfortaa-bold',
}

const privateKey = {
    fontFamily: 'comfortaa-bold',
    color: '#C0392B'
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

export default {
    picStyle,
    containerStyle,
    titleStyle,
    contentHead,
    contentStyle,
    keyword,
    underline,
    highlight,
    privateKey,
    modulus,
    publicKey,
    multiplier,
    bold
};
