import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    ScrollView,
    View
} from 'react-native'

import styles from './styles'

import Trophy from './Trophies';

class ProgressParent extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
                <ScrollView style={styles.progressParent.containerStyle}>
                    <Trophy title="test1" subtitle="test2" isEnabled={true} />
                    <Trophy title="test1" subtitle="test2" isEnabled={false} />
                </ScrollView>
        );
    }
}

mapStateToProps = state => ({

})

mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(ProgressParent);