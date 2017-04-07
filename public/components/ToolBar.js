import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToobarSeparator, 
  ToolbarTitle 
} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import SearchBar from "./SearchBar";


const ToolBar = React.createClass({
  propTypes : {
    logo: PropTypes.string,
    bTitle: PropTypes.string,
    element: PropTypes.element,
    hOpen: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
    hSearch: PropTypes.func.isRequired,
  },

  getDefaultProps: function() {
    return {
      logo: "images/logo.png",
      bTitle: "WaterAndBoards",
    }
  },

  render(){
    return(
      <Toolbar style={barStyle.bar}>
        <ToolbarGroup firstChild={true}>
          <Avatar src={this.props.logo} style={barStyle.left} />
          <ToolbarTitle text={this.props.bTitle} style={barStyle.title}/>
        </ToolbarGroup>
        <ToolbarGroup style={barStyle.center}>
          <SearchBar onClick={this.props.hSearch} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          {
            this.props.element == null ?
            <Logged onClick={this.props.hOpen} />:
            <SignUp onClick={this.props.hLogin} />
          }
        </ToolbarGroup>
      </Toolbar>
    )
  }
})


const Logged = ({ onClick }) => {
  return(
    <IconButton
      onTouchTap={onClick}
      style={barStyle.right} 
    >
      <Avatar src="images/avatar.jpg" style={{alignSelf: "center"}} />
    </IconButton>
  )
}


const SignUp = ({ onClick }) => (
  <RaisedButton 
    default={true} 
    style={barStyle.rightLogin}
    onClick={onClick}
  >
      SignUp
  </RaisedButton>
)


const barStyle = {
  bar: {
    height: 70,
  },
  rightLogin: {
    marginRight: 96,
  },
  right: {
    marginBottom: 20,
    marginRight: 96,
  },
  center: {
    marginBottom: 20,
    marginRight: 200, 
    marginLeft: 0,
  },
  left: {
    marginBottom: 3,
    marginLeft: 96,
  },
  title: {
    marginLeft: 4,
    marginRight: 2,
    fontSize: 28,
    fontFamily: "'Architects Daughter', cursive",
  }
}


export default ToolBar;
