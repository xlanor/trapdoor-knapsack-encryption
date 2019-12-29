import React, { Component } from 'react';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ScrollView } from 'react-native-gesture-handler';

//contents
import styles from './styles';
import contents from './contents';

// dynamic pages not static pages.
class IntroPage extends Component {
    constructor(props) {
        super(props);
    }
    getPage4 = () => {
        return contents.page4
    }
    getPage3 = () => {
        return contents.page3
    }
    getPage2 = () => {
        return contents.page2
    }
    getPage1 = () => {
        return contents.page1
    }
    checkPageNo = () => {
        const { lockState } = this.props;

        return lockState.lessonPageTabAndPages.tabPage;
    }
    getPageElements = () => {
        let pageNo = this.checkPageNo()

        switch (pageNo) {
            case 1: return this.getPage1();
            case 2: return this.getPage2();
            case 3: return this.getPage3();
            case 4: return this.getPage4();
            default: return this.getPage1();
        }
    }

    render() {
        let Page = this.getPageElements()
        return (
            <ScrollView style={styles.ScrollStyle.scrollStyle}>
                <Page/>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    lockState: state
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
