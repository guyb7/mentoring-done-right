import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { blueGrey100, blueGrey900 } from 'material-ui/styles/colors'

import HomeIcon from 'material-ui/svg-icons/action/home'
import MyStartupsIcon from 'material-ui/svg-icons/toggle/star'
import StartupsIcon from 'material-ui/svg-icons/communication/business'
import MembersIcon from 'material-ui/svg-icons/social/people'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import MessagesIcon from 'material-ui/svg-icons/communication/message'
import UserIcon from 'material-ui/svg-icons/social/person'
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: blueGrey900
  },
  menu: {
    width: '100%',
  },
  item: {
    color: blueGrey100
  },
  iconColor: blueGrey100
}

class SideNav extends Component {
  changePage(page) {
    this.props.history.push(page)
  }

  render() {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <Menu menuItemStyle={style.item} style={style.menu}>
          <MenuItem
            primaryText="Home"
            leftIcon={<HomeIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/')} />
          <MenuItem
            primaryText="My Start-Ups"
            leftIcon={<MyStartupsIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/my-start-ups')} />
          <MenuItem
            primaryText="Start-Ups"
            leftIcon={<StartupsIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups')} />
          <MenuItem
            primaryText="Members"
            leftIcon={<MembersIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/members')} />
        </Menu>
        <Menu menuItemStyle={style.item} style={style.menu}>
          <MenuItem
            primaryText="Notifications"
            leftIcon={<NotificationsIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/notifications')} />
          <MenuItem
            primaryText="Messages"
            leftIcon={<MessagesIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/messages')} />
          <MenuItem
            primaryText="Profile"
            leftIcon={<UserIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/profile')} />
          <MenuItem
            primaryText="Logout"
            leftIcon={<LogoutIcon color={style.iconColor} />}
            onTouchTap={() => {}} />
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    is_open: state.drawer.is_open,
    user: state.user
  }
}

const ConnectedSideNav = connect(mapStateToProps)(SideNav)

export default withRouter(ConnectedSideNav)
