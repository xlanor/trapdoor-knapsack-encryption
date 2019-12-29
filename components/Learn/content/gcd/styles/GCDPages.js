import { Dimensions } from 'react-native';

const containerStyle = { 
  padding: Dimensions.get('window').height * 0.01,
  backgroundColor: '#fff',
  textAlign: 'center',
  fontFamily: 'comfortaa',
}

const headStyle = { 
  fontFamily: 'comfortaa',
  height: 25, 
  backgroundColor: '#f1f8ff',
}

const wrapperStyle = { 
  fontFamily: 'comfortaa',
  flexDirection: 'row' 
}

const titleStyle = { 
  fontSize: 20,
  fontFamily: 'comfortaa-bold',
  textAlign: 'center',
}

const headerStyle={
  backgroundColor: '#f6f8fa'
}

const rowStyle = {
  fontFamily: 'comfortaa',
  height: 28,
}

const textStyle = {
  fontFamily: 'comfortaa',
  textAlign: 'center',
}

const tagStyle = {
  fontFamily: 'comfortaa',
  p: { textAlign: 'center', lineHeight: 20 },
  math: { fontSize: 20 }
}

export default {
  containerStyle,
  headStyle,
  wrapperStyle,
  titleStyle,
  headerStyle,
  rowStyle,
  textStyle,
  tagStyle
};