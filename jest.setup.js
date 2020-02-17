import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// See https://github.com/ptomasroos/react-native-scrollable-tab-view/issues/642
jest.mock('NativeAnimatedHelper');
