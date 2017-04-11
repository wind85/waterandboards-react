import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppBar from './containers/AppBar.js';
import SignUp from './containers/SignUp.js';
import Profile from './components/Profile.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlueGrey from './themes'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import rootReducer from './reducers';

// redux initial reducers state
const initialState = {
  AppBarReducer: { 
    opened: false, 
    simplebar: false, 
    showMenu: false,
    anchorEl: null,
  },
  LoginPageReducer: { 
    register: false 
  },
  NotificationsReducer: {
    total: 3,
    list: [
      {text:"test notification 1", status:"loading", checked: false},
      {text:"test notification 2", status:"done", checked: true},
      {text:"test notification 3", status:"done", checked: true},
    ],
  },
}

const reduxStore = createStore(
  rootReducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) 


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <Provider store={reduxStore}>
      <div> 
        <AppBar />
        <Profile />
      </div>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('content'))
