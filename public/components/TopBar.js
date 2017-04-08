import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';

import ToolBar from "./ToolBar";
import SideBar from './SideBar';
import * as Actions from "../actions";

const TopBar = React.createClass({
  propTypes : {
    element: PropTypes.element,
    logo: PropTypes.string,
    sTitle: PropTypes.string,
    hClose: PropTypes.func.isRequired,
    hOpen: PropTypes.func.isRequired,
    hLogin: PropTypes.func.isRequired,
    hSearch: PropTypes.func.isRequired,
    hUploads: PropTypes.func.isRequired,
    hMessages: PropTypes.func.isRequired,
    hItems: PropTypes.func.isRequired,
    hProfile: PropTypes.func.isRequired,
    hLogout: PropTypes.func.isRequired,
  },

  getDefaultProps: function() {
    return{
      element: <span />,
    }
  },

  render(){
    return(
      <div>
        <ToolBar
          element={this.props.element}
          hOpen={this.props.hOpen}
          hLogin={this.props.hLogin}
          hSearch={this.props.hSearch}
        />
        <SideBar
          hUploads={this.props.hUploads}
          hMessages={this.props.hMessages}
          hProfile={this.props.hProfile}
          hItems={this.props.hItems}
          hLogout={this.props.hLogout}
          hClose={this.props.hClose}
        />
      </div>
    )
  }
})


//  app bar end ----------------------------------------------------
//

export default TopBar;