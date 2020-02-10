import { Dimensions } from 'react-native';

const listItemContainer = {
  borderWidth: 1,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 1,
  borderRadius: 5,
  marginLeft: Dimensions.get('screen').width * 0.04,
  marginRight: Dimensions.get('screen').width * 0.04,
  paddingBottom: '2.5%',
  paddingTop: 0,
};

export default {
  listItemContainer,
};
