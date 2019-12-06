import React, { Component } from 'React';

import { 
  View, 
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  TextInput,
  FlatList 
} from 'react-native';
// import stylesheet.
import styles from './styles';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProgressBar1 from '../../../../assets/images/FiveStepProgress/ProgressBar1.png'
import ProgressBar2 from '../../../../assets/images/FiveStepProgress/ProgressBar2.png'
import ProgressBar3 from '../../../../assets/images/FiveStepProgress/ProgressBar3.png'
import ProgressBar4 from '../../../../assets/images/FiveStepProgress/ProgressBar4.png'
import ProgressBar5 from '../../../../assets/images/FiveStepProgress/ProgressBar5.png'

// dynamic pages not static pages.
class KeyPage extends Component {
   constructor(props){
      super(props);
      this.state = {

      }
    
   }

   getFirstPage = () => {
     return (
       <View>
         <Text style={styles.page1.textStyle}>Enter your private key A</Text>
         <Text style={styles.page1.textStyle}> This private key A should be in a super increasing sequence</Text>
         <TextInput style={styles.page1.textBoxStyle}/>
         <Text style={styles.page1.textStyle}>Private key a:</Text>
         <Text style={styles.page1.textStyle}>Knapsack Size n:</Text>
       </View>
     )
   }

   checkPageNo = () =>{
     const { lockState } = this.props;
     return lockState.lessonPageTabAndPages.tabPage;
   }

   getProgressImage = () => {
     let pageNo = this.checkPageNo()
     switch(pageNo){
        case 1: return ProgressBar1;
        case 2: return ProgressBar2;
        case 3: return ProgressBar3;
        case 4: return ProgressBar4;
        case 5: return ProgressBar5;
        default: return ProgressBar1;
     }
   }
   
   getPageElements = () => {
    let pageNo = this.checkPageNo()
    switch(pageNo){
       case 1: 
        return this.getFirstPage();
       case 2:
       case 3: 
       case 4:
       case 5: 
       default:  
          return this.getFirstPage();
    }
   }
   render(){
     console.log(this.getPageElements())
     return(
       <View>
         <Image style={styles.page1.progressBarSize} source={this.getProgressImage()}></Image>
        {
          this.getFirstPage()
        }

       </View>
     );
   }

}

const mapStateToProps = state => ({
  lockState: state
})


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
  }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(KeyPage);