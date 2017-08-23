import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { blueGrey100, blueGrey800, blueGrey900 } from 'material-ui/styles/colors'

import HomeIcon from 'material-ui/svg-icons/action/home'
import MyStartupsIcon from 'material-ui/svg-icons/toggle/star'
import MyTeamIcon from 'material-ui/svg-icons/maps/local-airport'
import DashboardIcon from 'material-ui/svg-icons/action/timeline'
import StartupsIcon from 'material-ui/svg-icons/communication/business'
import MembersIcon from 'material-ui/svg-icons/social/people'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import MessagesIcon from 'material-ui/svg-icons/communication/message'
import UserIcon from 'material-ui/svg-icons/social/person'
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import ActionItemsIcon from 'material-ui/svg-icons/editor/format-list-numbered'
import LeftIcon from 'material-ui/svg-icons/navigation/arrow-back'
import NewSessionIcon from 'material-ui/svg-icons/content/add'
import FilesIcon from 'material-ui/svg-icons/file/attachment'
import CalendarIcon from 'material-ui/svg-icons/action/date-range'
import OpportunitiesIcon from 'material-ui/svg-icons/action/redeem'

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
          {
            this.props.user.user_type === 'mentor' &&
            <MenuItem
              primaryText="New Session"
              leftIcon={<NewSessionIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/start-ups/ressio/new-session')} />
          }
          {
            this.props.user.user_type === 'startup' &&
            <MenuItem
              primaryText="Edit Page"
              leftIcon={<EditIcon color={style.iconColor} />}
              onTouchTap={() => {}} />
          }
          {
            this.props.user.user_type === 'startup' &&
            <MenuItem
              primaryText="Action Items"
              leftIcon={<ActionItemsIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/start-ups/ressio/action-items')} />
          }
          <MenuItem
            primaryText="Files"
            leftIcon={<FilesIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups/ressio/files')} />
          {
            this.props.user.user_type !== 'startup' &&
            <MenuItem
              primaryText="Send Message"
              leftIcon={<MessagesIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/start-ups/ressio/messages')} />
          }
        </Menu>)
    } else if (this.state.path.match(/^\/start-ups\/([^/]+)\/new-session$/i)) {
      menuItems = (
        <Menu menuItemStyle={style.item} style={style.menu}>
          <MenuItem
            primaryText="Back"
            leftIcon={<LeftIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/start-ups/ressio')} />
        </Menu>)
    } else if (this.state.path.match(/^\/start-ups\/([^/]+)\/action-items$/i)) {
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
          {
            this.props.user.user_type === 'mentor' &&
            <MenuItem
              primaryText="My Start-Ups"
              leftIcon={<MyStartupsIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/start-ups')} />
          }
          {
            this.props.user.user_type === 'accelerator' &&
            <MenuItem
              primaryText="Dashboard"
              leftIcon={<DashboardIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/dashboard')} />
          }
          {
            this.props.user.user_type !== 'startup' &&
            <MenuItem
              primaryText="Start-Ups"
              leftIcon={<StartupsIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/start-ups')} />
          }
          {
            this.props.user.user_type === 'startup' &&
            <MenuItem
              primaryText="My Mentors"
              leftIcon={<MyStartupsIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/members')} />
          }
          {
            this.props.user.user_type === 'accelerator' &&
            <MenuItem
              primaryText="Mentors"
              leftIcon={<MyStartupsIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/members')} />
          }
          {
            this.props.user.user_type !== 'accelerator' &&
            <MenuItem
              primaryText="People"
              leftIcon={<MembersIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/members')} />
          }
          {
            this.props.user.user_type === 'startup' &&
            <MenuItem
              primaryText="Reesio"
              leftIcon={<MyTeamIcon color={style.iconColor} />}
              onTouchTap={() => this.changePage('/start-ups/reesio')} />
          }
          <MenuItem
            primaryText="Agenda"
            leftIcon={<CalendarIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/agenda')} />
          <MenuItem
            primaryText="Opportunities"
            leftIcon={<OpportunitiesIcon color={style.iconColor} />}
            onTouchTap={() => this.changePage('/opportunities')} />
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
