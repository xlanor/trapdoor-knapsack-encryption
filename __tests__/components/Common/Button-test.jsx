import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button as rneButton } from 'react-native-elements';
import Button from '../../../components/Common/Button';
import 'jest-styled-components/native';
// https://github.com/styled-components/jest-styled-components

function TestComp(props) {
  return <Button {...props} />;
}

const GREEN_1 = '#2FBB7A';
const BLUE_1 = '#2C3E50';

describe('Components/Button testing', () => {
  jest.useFakeTimers();

  it('buttonColor prop should return expected values', () => {
    const props = {
      callback: () => {},
      text: 'Hello, world!',
      buttonColor: 'green',
    };

    const buttonWrapper = shallow(TestComp(props));
    // a green prop should return a button with green colors
    expect(toJson(buttonWrapper).props.buttonStyle).toEqual(expect.objectContaining({ backgroundColor: GREEN_1 }));
    // when the color is blue, the prop should be such that the color set is now blue.
    buttonWrapper.setProps({ buttonColor: 'blue' });
    expect(toJson(buttonWrapper).props.buttonStyle).toEqual(expect.objectContaining({ backgroundColor: BLUE_1 }));
    buttonWrapper.setProps({ buttonColor: 'red' });
    // if not, the color should default to green
    expect(toJson(buttonWrapper).props.buttonStyle).toEqual(expect.objectContaining({ backgroundColor: GREEN_1 }));
  });

  it('Test that callback function is working', () => {
    let callbackCheck = false;
    const props = {
      callback: () => {
        callbackCheck = true;
      },
      text: 'Hello, world!',
      buttonColor: 'green',
    };
    const buttonWrapper = shallow(TestComp(props));
    // now, when the touchable opacity is clicked, callbackCheck should be false,
    // because of the callback function.
    buttonWrapper
      .find(rneButton)
      .props()
      .onPress();
    // the value of callbackCheck should have been switched to true
    expect(callbackCheck).toEqual(true);

    // for good measure, we test it when it is blue, because blue returns a different
    // button object.
    // reset the variable,
    callbackCheck = false;
    expect(callbackCheck).toEqual(false);
    buttonWrapper.setProps({ buttonColor: 'green' });
    buttonWrapper
      .find(rneButton)
      .props()
      .onPress();
    expect(callbackCheck).toEqual(true);
  });
});
