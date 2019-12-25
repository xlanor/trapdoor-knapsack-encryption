import { Dimensions } from 'react-native';

const picStyle = {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    resizeMode: 'stretch',
}
<<<<<<< HEAD
const containerStyle = {
    height: Dimensions.get('window').height * 0.75,
    //alignItems: 'stretch',
    backgroundColor: '#fff'
}
const titleStyle = {
    fontSize: 30,
    fontFamily: 'comfortaa-bold',
    textAlign: 'center',
=======
const containerStyle = { 
    height: Dimensions.get('window').height * 0.8,
    alignItems: 'stretch',
    backgroundColor: '#fff'
}
const titleStyle ={
    justifyContent: 'center'
>>>>>>> 2c6a6bb... test gcd content image type
}

export default {
    picStyle,
    containerStyle,
    titleStyle
};