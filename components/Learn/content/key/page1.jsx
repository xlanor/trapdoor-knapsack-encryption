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

import { 
  ALLOW_NEXT_PAGE_ACTION
 }  from '../../../../actions/tabPage';

// dynamic pages not static pages.
class KeyPage extends Component {
   constructor(props){
      super(props);
      // local state not affected by redux
      this.state = {
        currentPrivateKey: "", //we do not need to persist this state, nor do we need to store this state elsewhere yet.
      }
    
   }

   isValidNumber = (stringToVerify) => {
    let str = String(stringToVerify);
    let reg = new RegExp('^[0-9]+$');
    return str.match(reg) === null ? false: true;
  }

   validateNumeric = () => {
      const { currentPrivateKey } = this.state;
      // splits the private key.
      let splitKey = currentPrivateKey.split(',');
      for(let i = 0; i < splitKey.length; i++){
        let checkNum = this.isValidNumber(splitKey[i]);
        if(!checkNum){
            // TODO: declare error in popup.
            this.setState({                                           
              currentPrivateKey: "", // TODO: reset the value in textbox too
            })
            return false;
        }
      } 
      
      return true;
   }
   
   isGreater = (a, b, idx) => {
     // returns true by default if idx is 0, if not whether a > b.
     console.log("Comparing "+ a + " "+ b)
      return idx == 0 ? true: a < b;
   }

   validateSuperIncreasing = () => {

    const { currentPrivateKey } = this.state;
    // splits the private key.
    let splitKey = currentPrivateKey.split(',');
    let currentMax = 0
    for(let i = 0; i < splitKey.length; i++){
      let curNo = Number(splitKey[i])
      let checkSuperIncreasing = this.isGreater(currentMax,curNo,i)
      if (checkSuperIncreasing){
        currentMax += (curNo);
      }else{
        return false;
      }
    }
    return true;
   }

   validatePrivateKey = () => {
      const { actions } = this.props;
      if (!this.validateNumeric()){
        // TODO: show an error message
        console.log("Not numeric!")
      }else{
        // check if it is superincreasing
        if(!this.validateSuperIncreasing()){
          console.log("Not superincreasing!")
        }else{
          console.log("Allowing next page")
          // sets the state.
          actions.ALLOW_NEXT_PAGE_ACTION()
        }
      }

   }


   getFirstPage = () => {
     return (
       <View>
         <Text style={styles.page1.textStyle}>Enter your private key A</Text>
         <Text style={styles.page1.textStyle}> This private key A should be in a super increasing sequence</Text>
         <TextInput style={styles.page1.textBoxStyle} onChangeText={(text)=>{
            this.setState({
              currentPrivateKey: text,
            })
         }}/>
         <Button title="Check Private Key" onPress={()=>{
            this.validatePrivateKey();
         }}/>
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
    ALLOW_NEXT_PAGE_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(KeyPage);