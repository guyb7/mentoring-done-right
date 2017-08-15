import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../store/action-creators'

import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import { blueGrey700 } from 'material-ui/styles/colors'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: blueGrey700,
    backgroundColor: '#fff',
    padding: 24,
    fontWeight: 300,
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 6px, rgba(0, 0, 0, 0.06) 0px 1px 4px',
    zIndex: 100
  }
}

class TitleBar extends Component {
  changeUserType(value) {
    this.props.dispatch(actionCreators.setUserType(value))
  }

  render() {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div>
          {this.props.title || 'Overview'}
        </div>
        <DropDownMenu value={this.props.user.user_type} onChange={(e,i,v) => this.changeUserType(v)} labelStyle={{ color: blueGrey700 }}>
          <MenuItem value={'startup'} primaryText="Startup" />
          <MenuItem value={'mentor'} primaryText="Mentor" />
          <MenuItem value={'accelerator'} primaryText="Accelerator" />
        </DropDownMenu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title.title,
    user: state.user
  }
}

const ConnectedTitleBar = connect(mapStateToProps)(TitleBar)

export default withRouter(ConnectedTitleBar)
