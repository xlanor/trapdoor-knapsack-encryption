import { React } from 'react';
import { shallow } from 'enzyme';
import { Modal, View, Text } from 'react-native';
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

  it('clicking it should trigger a popup', () => {
    const props = {
      messageContent: 'This is a test',
      callback: () => {},
      visibility: true,
      icon: Alert,
    };

    const alertPopUpWrapper = shallow(TestComp(props));

    expect(alertPopUpWrapper.find(Modal).props().visible).toBe(false);
  });
});

/*

  messageContent: PropTypes.string,
  renderedBlocks: PropTypes.node,
  callback: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  icon: PropTypes.node, */
