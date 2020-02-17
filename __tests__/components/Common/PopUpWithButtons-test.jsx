import React from 'react';
import { shallow } from 'enzyme';
import { Modal, TouchableOpacity, Image } from 'react-native';
import { Button as RneButton } from 'react-native-elements';
import PopUpWithButtons from '../../../components/Common/PopUpWithButtons';

function TestComp(props) {
  return <PopUpWithButtons {...props} />;
}
describe('Components/PopUpWithButtons testing', () => {
  jest.useFakeTimers();

  it('PopUp should show One button when one button is passed as props, and two if two are passed as props', () => {
    const props = {
      // eslint-disable-next-line object-shorthand
      visibility: true,
      close: () => {}, // callback function to be passed as props.
      ButtonOne: <RneButton />,
      messageContent: 'Hello, world!',
    };
    const popUpWrapper = shallow(TestComp(props));

    // the popup should be up and running,
    expect(popUpWrapper.find(Modal).props().visible).toBe(true);

    // the icon should be 1 - there's a close icon.
    expect(popUpWrapper.find(RneButton)).toHaveLength(1);
    popUpWrapper.setProps({ ButtonTwo: <RneButton /> });
    expect(popUpWrapper.find(RneButton)).toHaveLength(2);
  });
});
