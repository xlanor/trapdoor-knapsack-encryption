import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Card,
    ListItem,
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

class Trophy extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const {
            title,
            subtitle,
            isEnabled
        } = this.props
        return(
                isEnabled
                ?
                <ListItem
                    Component={TouchableScale}
                    friction={90}
                    tension={100} 
                    activeScale={0.95}
                    containerStyle={{ backgroundColor: 'blue', borderRadius: 5 }}
                    title={title}
                    subtitle={subtitle}
                    leftAvatar={{
                        source: {uri: 'https://i.redd.it/h2cc2y0ztqc41.jpg'},
                        size: 'large',
                        rounded: false,
                    }}
                />
                :
                <TouchableWithoutFeedback >
                    <View
                        style={{
                            backgroundColor: "red",
                            borderRadius: 5,
                    }}>
                        <ListItem
                            containerStyle={{ 
                                backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: 5 
                            }}
                            title={title}
                            subtitle={subtitle}
                            leftAvatar={{
                                source: {uri: 'https://i.redd.it/h2cc2y0ztqc41.jpg'},
                                size: 'large',
                                rounded: false,
                                disabled: true,
                                opacity: 0.5,
                            }}
                            disabled
                            disabledStyle={{
                                backgroundColor: 'rgba(52, 52, 52, 0.9)',
                                borderRadius: 5,
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            
        );
    }
}

Trophy.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired,
}


export default Trophy;