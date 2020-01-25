import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    ScrollView
} from 'react-native'

import Trophy from './Trophies';

class ProgressParent extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
            <ScrollView>
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