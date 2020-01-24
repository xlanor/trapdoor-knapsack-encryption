import React, { Component } from 'react';
// RN imports
import { 
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    Keyboard,
    Dimensions
} from 'react-native';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import stylesheet.
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';

// typecheck
import PropTypes from 'prop-types';

class PageThree extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {
            showCoprimeInfoPopUp,
            validateMultiplier,
            setMultiplier,
            keyboardVisiblity, 
            curModulo,
            curMultiplier,
        } = this.props;
        return(

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View 
                    style={ 
                        keyboardVisiblity
                        ? { ...styles.page1.keyboardAvoidingViewMargin} 
                        : null}
                >
                    <Text style={styles.page1.contentStyle}>
                         Choose your <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>multiplier w</Text>:
                    </Text>
                    <Text style={styles.page1.contentStyleSmall}>
                        This {" "}
                        <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>multiplier w</Text>
                        {" "}must be a {" "}
                        <Text style={styles.page1.linkStyle} onPress={() => {showCoprimeInfoPopUp}}>
                            co-prime
                        </Text> 
                        {" "}to your {" "}
                        <Text style={styles.page1.modulusStyle}>modulus m</Text>
                    </Text>
                    <View style={{ marginTop: Dimensions.get('window').height * 0.02 }}>
                        <Text style={styles.page1.contentStyle}>
                        This means <Text style={{ ...styles.page1.GCDStyle, ...styles.page1.boldFont }}>
                            gcd({curModulo}, <Text style={styles.page1.multiplierStyle}>w</Text>) = 1
                        </Text>
                        </Text>
                    </View>
                    <View style={{ marginTop: Dimensions.get('window').height * 0.03 }}>
                        <TextInput
                            defaultValue={
                                curMultiplier === 0
                                ? null
                                : curMultiplier.toString()
                            } 
                            onSubmitEditing={
                                Keyboard.dismiss
                            } 
                            keyboardType={'numeric'} 
                            style={styles.page1.textBoxStyle} 
                            onChangeText={(text) => {
                                setMultiplier(text)
                            }} 
                        />
                        <View style={styles.page1.buttonRow}>
                            <CustomButton text="Validate" callback={validateMultiplier} />
                        </View>
                    </View> 
                    {
                        curMultiplier === 0
                        ? null
                        : <Text style={styles.page1.contentStyle}>
                            <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>Multiplier w</Text>
                            : {curMultiplier.toString()}
                        </Text>
                    }
                </View>
            </TouchableWithoutFeedback>


        );
    }
}

PageThree.propTypes = {
    showCoprimeInfoPopUp: PropTypes.func.isRequired,
    setMultiplier: PropTypes.func.isRequired,
    validateMultiplier: PropTypes.func.isRequired,
    keyboardVisiblity: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    curModulo: state.updateParameters.modulo,
    curMultiplier: state.updateParameters.multiplier,

})


export default connect(mapStateToProps)(PageThree);