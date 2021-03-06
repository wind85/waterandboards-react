import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import createHistory from 'history/createBrowserHistory'
import { 
  ConnectedRouter, 
  routerReducer, 
  routerMiddleware, 
  push 
} from 'react-router-redux'

import BlueGrey from './themes'
import rootReducer from './reducers'
import initialState from './state.js'
import { 
  asyncComponent, 
  saveState, 
  loadState 
}from './utils'
import 'preact/devtools'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// // Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(middleware)),
) 


let com = "./components/", con = "./containers/"

const Body = asyncComponent(() =>
  System.import(com + 'Body').then(module => module.default)
)

const Feed = asyncComponent(() =>
  System.import(con + 'FeedContainer').then(module => module.default)
)

const Login = asyncComponent(() =>
  System.import(con + 'LoginContainer').then(module => module.default)
)

const Profile = asyncComponent(() =>
  System.import(com + 'ProfilePage').then(module => module.default)
)

const NotFound = asyncComponent(() =>
  System.import(com + 'NotFound').then(module => module.default)
)

const ResetPasswd = asyncComponent(() =>
  System.import(con + 'ResetPasswdContainer.js').then(module => module.default)
)

const ChangePasswd = asyncComponent(() =>
  System.import(con + 'ChangePasswdContainer.js').then(module => module.default)
)


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(BlueGrey)}>
    <Provider store={reduxStore}>
      <ConnectedRouter history={history}>
        <Body>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/logged" component={Feed} />
            <Route path="/signup" component={Login} />
            <Route path="/password-reset" component={ResetPasswd} />
            <Route path="/password-change" component={ChangePasswd} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Body>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(<App/>, document.getElementById('content'))
