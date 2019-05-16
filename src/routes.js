import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repos from './pages/Repos';
import Issues from './pages/Issues';

const Routes = createAppContainer(createSwitchNavigator({
  Repos,
  Issues,
}, {
  initialRouteName: 'Repos',
}));

export default Routes;
