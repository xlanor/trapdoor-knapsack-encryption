import React, { Component } from 'React';

import { 
  View, 
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  FlatList 
} from 'react-native';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// dynamic pages not static pages.
class KeyPage extends Component {
   constructor(props){
      super(props);

   }
   render(){
     return(
        <Text>Hello, world!</Text>
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