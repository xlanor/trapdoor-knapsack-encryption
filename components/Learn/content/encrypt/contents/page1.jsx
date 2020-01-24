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

import PropTypes from 'react-proptypes'
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import stylesheet.
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';

class PageOne extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {
            keyboardVisiblity,
            updateCurrentTextBox,
            validateInput,
            textToEncrypt,
            binaryString,
            asciiString,
        } = this.props;
        return(
            <>
                {
                keyboardVisiblity
                    ? null
                    : (
                    <>
                        <Text style={styles.tutorial.contentStyle}>
                            Now, to encrypt a message,
                            you first need to convert the message into ascii values and then to binary.
                        </Text>
                    </>
                    )
                }
                 <View style={{ marginTop: Dimensions.get('window').height * 0.02, marginBottom: Dimensions.get('window').height * 0.01 }}>
                    <Text style={
                        keyboardVisiblity
                        ? { ...styles.tutorial.contentStyleSmall, marginTop: Dimensions.get('screen').height * 0.02, }
                        : { ...styles.tutorial.contentStyleSmall, marginTop: 0 }
                    }>Enter your message to encrypt:</Text>
                    <TextInput defaultValue={
                        textToEncrypt === ""
                        ? null
                        : textToEncrypt
                    } style={styles.tutorial.textBoxStyle} onChangeText={(text) => {
                        updateCurrentTextBox(text)
                    }} />
                    <View style={styles.tutorial.buttonRow}>
                        <CustomButton text="Validate" callback={validateInput} />
                    </View>
                </View>
                {
                    keyboardVisiblity
                    ? null
                    : (
                        <>
                        <Text style={styles.tutorial.contentStyleSmall}>
                            <Text style={styles.tutorial.boldFont}>Your message:</Text> {textToEncrypt}{"\n"}
                            <Text style={styles.tutorial.boldFont}>Ascii value:</Text> {asciiString}{"\n"}
                            <Text style={styles.tutorial.boldFont}>Binary value:</Text> {binaryString}
                        </Text>
                        <Text style={{
                            ...styles.tutorial.contentStyleSmall,
                            marginTop: Dimensions.get('window').height * 0.02
                        }}>
                            Divide the binary string to the blocks according to{" "}
                            <Text style={styles.tutorial.knapsackSizeStyle}>knapsack size n</Text>
                            {" "}to corresponding{" "}
                            <Text style={styles.tutorial.publicKey}>public key</Text>
                            {" "}(binary length ÷ n)
                        </Text>
                        <Text style={{
                            ...styles.tutorial.contentStyleSmall,
                            marginTop: Dimensions.get('window').height * 0.02
                        }}>
                            Add the{" "}
                            <Text style={styles.tutorial.publicKey}>public key b</Text>
                            {" "}that corresponds to the value 1 in binary x
                        </Text>
                        </>
                    )
                }
            </>
        );
    }
}

PageOne.propTypes = {
    keyboardVisiblity: PropTypes.bool.isRequired,
    updateCurrentTextBox: PropTypes.func.isRequired,
    validateInput: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    textToEncrypt: state.encryption.textToEncrypt,
    asciiString: state.encryption.asciiString,
    binaryString: state.encryption.binaryString,
})

export default connect(mapStateToProps)(PageOne);
