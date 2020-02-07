import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Card,
    ListItem,
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { TouchableWithoutFeedback, View, Text, Dimensions } from 'react-native';

class Trophy extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(image)
        const {
            title,
            subtitle,
            isEnabled,
            image,
            onPress,
        } = this.props
        return(
            isEnabled
            ?
                <ListItem
                    Component={TouchableScale}
                    friction={90}
                    tension={100} 
                    activeScale={0.95}
                    containerStyle={{ 
                        borderRadius: 5,
                        marginBottom: Dimensions.get('screen').height * 0.02,
                        borderWidth: 2,
                        borderColor: '#ddd',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.9,
                        shadowRadius: 2,
                        elevation: 1,

                    }}
                    title={title}
                    subtitle={subtitle}
                    leftAvatar={{
                        source: image,
                        size: 'large',
                        rounded: false,
                    }}
                    onPress={onPress}
                />
                :
              
                <TouchableWithoutFeedback >
                <View
                    style={{
                        borderRadius: 5,
                }}>
                    <ListItem
                        containerStyle={{ 
                            backgroundColor: '#000000', borderRadius: 5 
                        }}
                        title={title}
                        subtitle={subtitle}
                        leftAvatar={{
                            source: image,
                            size: 'large',
                            rounded: false,
                            disabled: true,
                            opacity: 0.5,
                        }}
                        disabled
                        disabledStyle={{
                            backgroundColor: '#a9a9a9',
                            borderRadius: 5,
                        marginBottom: Dimensions.get('screen').height * 0.02,
                        borderWidth: 2,
                        borderColor: '#878787',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.9,
                        shadowRadius: 2,
                        elevation: 1,

                            borderRadius: 5,
                            marginBottom: Dimensions.get('screen').height * 0.02 
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
/*
 
                */
Trophy.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired,
    image: PropTypes.node.isRequired,
}


export default Trophy;