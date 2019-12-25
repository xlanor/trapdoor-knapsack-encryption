import { Dimensions } from 'react-native';

const picStyle = {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    resizeMode: 'stretch',
}
const containerStyle = { 
    height: Dimensions.get('window').height * 0.8,
    //alignItems: 'stretch',
    backgroundColor: '#fff'
}
const titleStyle ={
    alignItems: 'center'
}

export default {
    picStyle,
    containerStyle,
    titleStyle
};