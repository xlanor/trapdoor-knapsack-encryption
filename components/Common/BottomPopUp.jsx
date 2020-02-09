import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import * as Animatable from 'react-native-animatable';
import { bottomPopUp as styles } from './styles';

class BottomPopUp extends Component {
  intervalID = 0;

  constructor(props) {
    super(props);
    this.state = {
      slideOut: false,
    };
  }

  componentDidMount() {
    this.intervalID = setTimeout(() => {
      this.setState({ slideOut: true });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { slideOut } = this.state;
    const { hideTrophyAnimation } = this.props;

    return (
      <Animatable.View
        animation={slideOut ? 'slideOutDown' : 'slideInUp'}
        onAnimationEnd={hideTrophyAnimation}
        duration={1500}
      >
        <ListItem
          containerStyle={{
            ...styles.listItemContainer,
          }}
          leftIcon={{ name: 'trophy', type: 'font-awesome' }}
          title="Congratulations!"
          titleStyle={{ fontSize: 12 }}
          subtitleStyle={{ fontSize: 10 }}
          subtitle="You have unlocked a new trophy!"
        />
      </Animatable.View>
    );
  }
}

BottomPopUp.propTypes = {
  hideTrophyAnimation: PropTypes.func.isRequired,
};

export default BottomPopUp;
