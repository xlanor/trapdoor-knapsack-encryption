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
import PropTypes from 'react-proptypes'

// import stylesheet.
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';
class PageTwo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {
            currentDecryptedBlocks,
            showPaddingInfoPopUp,
            setSpinner,
            binaryString,
            asciiString,
            decryption,
            padding,
            decryptedText,
        } = this.props;
        let u = Dimensions.get('window').height;
        return(
            <>
                <Text style={styles.tutorial.contentStyle}>
                    Remove{" "}
                    <Text style={styles.tutorial.linkStyle} onPress={showPaddingInfoPopUp}>
                        padding from x
                    </Text>
                    {" "}if there is any.
                    {"\n\n"}
                    Next, convert the{" "}
                    <Text style={styles.tutorial.boldFont}>
                        binary values
                    </Text>
                    {" "}to the{" "}
                    <Text style={styles.tutorial.boldFont}>
                        ascii value
                    </Text>.{"\n\n"}
                    Lastly, convert the{" "}
                    <Text style={styles.tutorial.boldFont}>
                        ascii value
                    </Text>
                    {" "}back to characters to get back the decrypted message.
                    {"\n\n"}
                    <Text style={styles.tutorial.boldFont}>Current Padding:</Text> {padding}
                </Text>
                <View style={{ marginTop: u * 0.03, marginBottom: u * 0.03 }}>
                    {
                        currentDecryptedBlocks !== null ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.tutorial.multipleButtonLeft}>
                                <CustomButton text="Decrypt" callback={decryption} />
                            </View>
                            <View style={styles.tutorial.multipleButtonRight}>
                            <CustomButton text="Blocks"
                                callback={setSpinner}
                                buttonColor="blue"
                            />
                            </View>
                        </View>
                        :
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <CustomButton text="Decrypt" callback={decryption} />
                        </View>
                    }
                </View>

                {
                    decryptedText != ""
                    ? <>
                    <Text style={styles.tutorial.contentStyle}>
                        <Text style={styles.tutorial.boldFont}>Binary value</Text>:{"\n"}
                        {binaryString}
                        {"\n\n"}
                        <Text style={styles.tutorial.boldFont}>Ascii value</Text>:{"\n"}
                        {asciiString}
                        {"\n\n"}
                        <Text style={styles.tutorial.boldFont}>Decrypted Text</Text>: {decryptedText}
                    </Text>
                    </>
                    : null
                }
            </>
        );
    }
}

PageTwo.propTypes = {
    showPaddingInfoPopUp: PropTypes.func.isRequired,
    currentDecryptedBlocks: PropTypes.any,
    decryption: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired,
    decryptedText: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    padding: state.encryption.padding,
    binaryString: state.encryption.binaryString,
    asciiString: state.encryption.asciiString,
})

export default connect(mapStateToProps)(PageTwo);