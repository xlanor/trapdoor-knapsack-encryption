import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
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
});
