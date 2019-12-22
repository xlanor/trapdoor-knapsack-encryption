import { COLORS } from '../../../constants/Colors';
import { Dimensions } from 'react-native';

const arrowWidth = Dimensions.get('window').width * 0.1;
const arrowImageWidth = 937;
const arrowImageHeight = 906;
const nextArrowSize = {
    width: arrowWidth,
    height: arrowWidth/arrowImageWidth*arrowImageHeight,
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
    flex: 1,
    width: '100%',
    paddingLeft: Dimensions.get('window').width * 0.05,
    paddingRight: Dimensions.get('window').width * 0.05,
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE_1,
  }

const scrollViewWrapper = {
    flex: 5,
}

const learnTabPad = {
    marginLeft: Dimensions.get('window').height * 0.05,
    marginRight: Dimensions.get('window').height * 0.05,
}

export default {
    nextArrowSize,
    borderWrapper,
    rightArrowWrapper,
    leftArrowWrapper,
    centerFooterWrapper,
    bottom,
    scrollViewWrapper,
    learnTabPad,
    
}