import { COLORS } from '../../../constants/Colors';
import { Dimensions } from 'react-native';

const nextArrowSize = {
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').height * 0.08,
}

const borderWrapper = {
    flexDirection: 'row',
}

const rightArrowWrapper = {
    flex: 1, 
    alignItems: 'flex-end'
}

const leftArrowWrapper = {
    flex: 1, 
    marginLeft: 'auto'
}

const centerFooterWrapper = {
    flex: 1, 
    justifyContent: 'center'
}

const bottom =  {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.12,
    paddingLeft: Dimensions.get('window').width * 0.05,
    paddingRight: Dimensions.get('window').width * 0.05,
    backgroundColor: COLORS.WHITE_1,
    justifyContent: 'center',
  }

const scrollViewWrapper = {
    paddingBottom: 50, 
    backgroundColor: COLORS.WHITE_1,
    paddingBottom: Dimensions.get('window').height * 0.15,
}

export default {
    nextArrowSize,
    borderWrapper,
    rightArrowWrapper,
    leftArrowWrapper,
    centerFooterWrapper,
    bottom,
    scrollViewWrapper,
    
}