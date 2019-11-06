import { COLORS } from '../../../constants/Colors';

const imageStyleArrow = {
  alignSelf: 'center',
  width: 150,
  height: 150,
};

const imageStyle = {
  alignSelf: 'center',
  width: 70,
  height: 70,
};

const iconsView = {
  flex:1,
  marginTop:100,
  marginBottom: 20,
}


const textBox = {
  backgroundColor: COLORS.RED_1,
  alignSelf: 'center',
  fontFamily: 'open-sans',
  fontSize: 40,
  color: COLORS.YELLOW_1,
  minWidth: 350,
  textAlign: 'center',
  borderRadius: 10,
  borderColor: COLORS.RED_1,
  borderWidth: 1,
  overflow: 'hidden',
  padding:10,
}

const textWrapperStyle = { 
    flex:1, 
    alignItems: 'center', 
}
export default {
  imageStyle,
  textBox,
  textWrapperStyle,
  imageStyleArrow,
  iconsView
}