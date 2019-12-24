import { Dimensions } from 'react-native';

const iconWidth = Dimensions.get('window').width * 0.15;
const modalBackground = {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
};


const modalContainer = {
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  justifyContent: 'center',
  width: '80%',

  // margin and padding
  paddingBottom: Dimensions.get('window').height * 0.05,
  paddingLeft: Dimensions.get('window').height * 0.03,
  paddingRight: Dimensions.get('window').height * 0.03,
  paddingTop: Dimensions.get('window').height * 0.05,
  textAlign: 'center',
};


const iconSize = {
    width: iconWidth,
    height: iconWidth,
}
const modalMessage = {
  fontSize: 18,
  color: 'black',
  textAlign: 'center',
};

const iconViewWrapper = {
  alignItems: 'center',
  marginBottom: Dimensions.get('window').height * 0.02,
}

export default { 
  modalBackground, 
  modalContainer, 
  modalMessage,
  iconSize, 
  iconViewWrapper,
};