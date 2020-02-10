import { Dimensions } from 'react-native';

const containerStyle = {
    flex: 1,
    padding: 16,
    paddingTop: 30,
  }

  const headStyle = {
    height: 40,
    backgroundColor: '#f1f8ff',
  }

  const wrapperStyle = {
    flexDirection: 'row'
  }

  const titleStyle = {
    backgroundColor: '#f6f8fa'
  }

  const rowStyle = {
    height: 28,
  }

  const textStyle = {
    textAlign: 'center',
    paddingLeft: Dimensions.get('window').width * 0.03,
    paddingRight: Dimensions.get('window').width * 0.03,
  }

  export default {
    containerStyle,
    headStyle,
    wrapperStyle,
    titleStyle,
    rowStyle,
    textStyle,
  }
