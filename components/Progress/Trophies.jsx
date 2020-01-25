import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Card,
    ListItem,
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

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
                <ListItem
                    containerStyle={{ backgroundColor: 'blue', borderRadius: 5 }}
                    title={title}
                    subtitle={subtitle}
                    leftAvatar={{
                        source: {uri: 'https://i.redd.it/h2cc2y0ztqc41.jpg'},
                        size: 'large',
                        rounded: false,
                    }}
                    disabled
                    disabledStyle={{
                        backgroundColor:'grey'
                    }}
                />
        );
    }
}

Trophy.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired,
}


export default Trophy;