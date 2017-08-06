import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { blueGrey100, blueGrey800, blueGrey900 } from 'material-ui/styles/colors'

import HomeIcon from 'material-ui/svg-icons/action/home'
import MyStartupsIcon from 'material-ui/svg-icons/toggle/star'
import StartupsIcon from 'material-ui/svg-icons/communication/business'
import MembersIcon from 'material-ui/svg-icons/social/people'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import MessagesIcon from 'material-ui/svg-icons/communication/message'
import UserIcon from 'material-ui/svg-icons/social/person'
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app'
import LeftIcon from 'material-ui/svg-icons/navigation/arrow-back'
import NewSessionIcon from 'material-ui/svg-icons/content/add'
import SessionsIcon from 'material-ui/svg-icons/content/inbox'
import FilesIcon from 'material-ui/svg-icons/file/attachment'

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
  divider: {
    backgroundColor: blueGrey800
  },
  item: {
    color: blueGrey100
  },
  iconColor: blueGrey100
}

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: '/'
    }
  }

  componentDidMount(prevProps, prevState) {
    this.setState({
      ...this.state,
      path: this.props.history.location.pathname
    }, () => {
      this.props.history.listen((location, action) => {
        this.setState({
          ...this.state,
          path: location.pathname
        })
      })
    })
  }

  changePage(page) {
    this.props.history.push(page)
  }

  render() {
    let menuItems = null
    if (this.state.path.match(/^\/start-ups\/([^/]+)$/i)) {
      menuItems = (
        <Menu menuItemStyle={style.item} style={style.menu}>
          <MenuItem
            primaryText="Back Home"
            leftIcon={<LeftIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/')} />
          <Divider style={style.divider} />
          <MenuItem
            primaryText="New Session"
            leftIcon={<NewSessionIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups/ressio/new-session')} />
          <MenuItem
            primaryText="Files"
            leftIcon={<FilesIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups/ressio/files')} />
          <MenuItem
            primaryText="Send Message"
            leftIcon={<MessagesIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups/ressio/messages')} />
        </Menu>)
    } else if (this.state.path.match(/^\/start-ups\/([^/]+)\/new-session$/i)) {
      menuItems = (
        <Menu menuItemStyle={style.item} style={style.menu}>
          <MenuItem
            primaryText="Back"
            leftIcon={<LeftIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups/ressio')} />
        </Menu>)
    } else {
      menuItems = (
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
            primaryText="People"
            leftIcon={<MembersIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/members')} />
        </Menu>)
    }
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        {menuItems}
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
    )
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
