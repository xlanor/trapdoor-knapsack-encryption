import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Dimensions } from 'react-native';



import * as Animatable from 'react-native-animatable';

class BottomPopUp extends Component {
    intervalID = 0;
    constructor(props){
        super(props);
        this.state = {
            slideOut: false,
        }
    }

    componentDidMount(){
        this.intervalID = setTimeout(() => {
            this.setState({ slideOut: true})
        }, 3000)
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }
    

    render(){
        const { slideOut } = this.state;
        const { hideTrophyAnimation } = this.props;
       
        return(
        <Animatable.View 
            animation={slideOut ? "slideOutDown": "slideInUp"}
            onAnimationEnd={hideTrophyAnimation} 
            duration={1500}>
             <ListItem
                containerStyle={{
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
                    marginBottom: Dimensions.get('screen').width * 0.04,
                }}
                leftIcon={{ name: 'trophy', type:'font-awesome' }}
                title={"Congratulations!"}
                subtitle={"You have unlocked a new trophy!"}
            />
        </Animatable.View>
       
        );  
    }
}

BottomPopUp.propTypes = {
    hideTrophyAnimation: PropTypes.func.isRequired,
}



export default BottomPopUp;