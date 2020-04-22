import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CMS from 'netlify-cms'
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('apion', Apion);