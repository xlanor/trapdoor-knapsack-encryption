import React from 'react';
import { shallow } from 'enzyme';
import { Modal, TouchableOpacity, Image } from 'react-native';
import Alert from '../../../assets/images/alert.png';
import PopUp from '../../../components/Common/PopUp';

function TestComp(props) {
  return <PopUp {...props} />;
}

describe('Components/PopUp testing', () => {
  jest.useFakeTimers();

  it('Popup callback should trigger a close', () => {
    let visibility = true;
    const props = {
      // eslint-disable-next-line object-shorthand
      visibility: visibility,
      close: () => {
        visibility = false;
      }, // callback function to be passed as props.
      message: 'Hello, world!',
      icon: null,
      // content
    };
    const popUpWrapper = shallow(TestComp(props));

    // the popup should be up and running,
    expect(popUpWrapper.find(Modal).props().visible).toBe(true);
    popUpWrapper
      .find(TouchableOpacity)
      .props()
      .onPress();

    // we pass the new value of the variable that was changed in the callback function over
    // this simulates the prop in the parent component being changed and
    // passed to child component
    // eslint-disable-next-line object-shorthand
    popUpWrapper.setProps({ visibility: visibility });
    // and now the popup should be hdiden.
    expect(popUpWrapper.find(Modal).props().visible).toBe(false);
  });

  it('Popup should display null when no image is passed in and display an icon when an image is passed in', () => {
    const props = {
      message: 'This is a test',
      close: () => {},
      visibility: true,
      icon: null,
    };
    const popUpWrapper = shallow(TestComp(props));

    // the popup should be up and running,
    expect(popUpWrapper.find(Modal).props().visible).toBe(true);

    // the icon should be 1 - there's a close icon.
    expect(popUpWrapper.find(Image)).toHaveLength(1);
    popUpWrapper.setProps({ icon: Alert });
    expect(popUpWrapper.find(Image)).toHaveLength(2);
  });
});
