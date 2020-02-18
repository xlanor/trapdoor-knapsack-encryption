import React from 'react';
import { shallow } from 'enzyme';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import Alert from '../../../assets/images/alert.png';
import AlertPopUp from '../../../components/Common/AlertPopUp';

function TestComp(props) {
  return (
    <AlertPopUp {...props}>
      <View>
        <Text>Click me</Text>
      </View>
    </AlertPopUp>
  );
}
describe(' AlertPopUp testing', () => {
  jest.useFakeTimers();

  it('Popup callback should trigger a close', () => {
    let visibility = true;
    const props = {
      messageContent: 'This is a test',
      callback: () => {
        visibility = false;
      },
      // eslint-disable-next-line object-shorthand
      visibility: visibility,
      icon: null,
    };

    const alertPopUpWrapper = shallow(TestComp(props));

    // the popup should be up and running,
    expect(alertPopUpWrapper.find(Modal).props().visible).toBe(true);
    // now, when the touchable opacity is clicked, visibility should be false,
    // because of the callback function.
    alertPopUpWrapper
      .find(TouchableOpacity)
      .props()
      .onPress();
    // we pass the new value of the variable that was changed in the callback function over
    // eslint-disable-next-line object-shorthand
    alertPopUpWrapper.setProps({ visibility: visibility });
    // and now the popup should be hdiden.
    expect(alertPopUpWrapper.find(Modal).props().visible).toBe(false);
  });

  it('Popup should display null when no image is passed in and display an icon when an image is passed in', () => {
    const props = {
      messageContent: 'This is a test',
      callback: () => {},
      visibility: true,
      icon: null,
    };

    const alertPopUpWrapper = shallow(TestComp(props));

    // the popup should be up and running,
    expect(alertPopUpWrapper.find(Modal).props().visible).toBe(true);
    // the icon should be null
    expect(alertPopUpWrapper.find(Image).exists()).toBe(false);
    alertPopUpWrapper.setProps({ icon: Alert });

    expect(alertPopUpWrapper.find(Image).exists()).toBe(true);
  });

  it('Popup should display rendered blocks OR text', () => {
    const props = {
      messageContent: 'This is a test',
      callback: () => {},
      visibility: true,
      icon: null,
      renderedBlocks: <Text>Yoona</Text>,
    };
    // Although we do have a block component we don't need to explicitly mock one because we declared PropTypes as Node.

    const alertPopUpWrapper = shallow(TestComp(props));
    // the popup should be up and running,
    expect(alertPopUpWrapper.find(Modal).props().visible).toBe(true);
    // there should be some text
    expect(alertPopUpWrapper.find(Text).exists()).toBe(true);
    // in this case, even when message content and rendered blocks are both passed in rendered blocks always takes piority
    // Thus, the text that is rendered should be Yoona.
    expect(alertPopUpWrapper.find(Text).prop('children')).toEqual('Yoona');
    // now, we remove the renderedBlocks.
    alertPopUpWrapper.setProps({ renderedBlocks: null });
    // it should now be equivalent to messageContent in the original props.
    expect(alertPopUpWrapper.find(Text).prop('children')).toEqual('This is a test');
  });
});

/*

  messageContent: PropTypes.string,
  renderedBlocks: PropTypes.node,
  callback: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  icon: PropTypes.node, */
