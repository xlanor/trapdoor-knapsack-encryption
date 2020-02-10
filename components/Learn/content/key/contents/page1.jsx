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
class FirstPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            allowNextPage,
            privateKeyString,
            privateKeyArr,
            keyboardVisiblity,
            validatePrivateKey,
            showSuperIncreasingInfoPopUp,
            updatePrivateKey,
        } = this.props;
        console.log(privateKeyString)
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={
                        keyboardVisiblity
                            ? { ...styles.page1.keyboardAvoidingViewMargin }
                            : null
                    }
                >
                    <Text style={styles.page1.contentStyle}>
                        Enter your <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>private key a</Text>:
                        {"\n\n"}
                        (This <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>private key a</Text>
                        {" "}should be in a{" "}
                        <Text style={styles.page1.linkStyle} onPress={showSuperIncreasingInfoPopUp} >
                            super increasing sequence
                        </Text>
                        )
                    </Text>
                    <View style={{ marginTop: Dimensions.get('window').height * 0.03 }}>
                        <TextInput
                            defaultValue={
                                privateKeyString === ""
                                    ? null
                                    : privateKeyString
                            }
                            style={styles.page1.textBoxStyle}
                            onChangeText={(text) => {
                                updatePrivateKey(text)
                            }}
                            onSubmitEditing={
                                Keyboard.dismiss
                            }
                        />
                        <View style={styles.page1.buttonRow}>
                            <CustomButton text="Validate" callback={validatePrivateKey} />
                        </View>
                    </View>
                    <Text style={styles.page1.contentStyle}>
                        <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>Private key a</Text>
                        : {
                            allowNextPage
                                ? privateKeyString
                                : null
                        }
                        {"\n"}
                        <Text style={{ ...styles.page1.knapsackSizeStyle, ...styles.page1.boldFont }}>Knapsack Size n</Text>
                        : {
                            allowNextPage
                                ? privateKeyArr.length
                                : null
                        }
                    </Text>
                </View>

            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = state => ({
    allowNextPage: state.lessonPageTabAndPages.allowNextPage,
    privateKeyString: state.updateParameters.privateKeyString,
    privateKeyArr: state.updateParameters.privateKeyArr,
})

FirstPage.propTypes = {
    keyboardVisiblity: PropTypes.bool.isRequired,
    updatePrivateKey: PropTypes.func.isRequired,
    validatePrivateKey: PropTypes.func.isRequired,
    showSuperIncreasingInfoPopUp: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(FirstPage);
