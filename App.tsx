import React from 'react';
import {SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/navigation';
import store from './src/redux/store';

function App(): React.JSX.Element {
 
  return (
    <Provider store={store}>
        <Navigator/>
    </Provider>
    
  );
}
export default App;
