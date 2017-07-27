import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import TextField from 'material-ui/TextField'
import { blueGrey50, grey800, blueGrey300, green300, red300 } from 'material-ui/styles/colors'

import user1img from '../img/user-1.jpg'
import user2img from '../img/user-2.jpg'
import startupReesioImg from '../img/startup-reesio.png'

const style = {
  container: {
    height: '100%',
    width: '100%',
    maxWidth: 900,
    color: grey800
  },
  item: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 24
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    width: 'auto',
    height: 100,
    marginLeft: 20
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    margin: 5
  },
  members: {
    width: 220
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  notes: {
    flex: 1,
    margin: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: blueGrey50
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  actionItemText: {
    marginLeft: 10,
    fontSize: 16
  },
  checkbox: {
    maxWidth: 450,
    marginBottom: 20
  },
  actionItemDue: {
    marginLeft: 10,
    fontSize: 13,
    color: blueGrey300
  },
  actionItemDueRed: {
    marginLeft: 10,
    fontSize: 13,
    color: red300
  },
  greenText: {
    color: green300
  }
}

class StartUp extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Start-Up Page'))
  }

  changePage(page) {
    this.props.history.push(page)
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <div style={style.header}>
            <div>
              <h2>Reesio</h2>
              <p>A modern transaction management system for today's busy real estate professional.</p>
            </div>
            <img src={startupReesioImg} alt="" style={style.logo} />
          </div>
        </div>

        <div style={style.header}>
          <div style={style.item}>
            <p>
              With a simple, mobile-friendly design to delight both clients and transaction members, Reesio helps you streamline all of your transactions online, reduce legal liability, and eliminate paperwork and manual processes.
            </p>
            <div style={style.tags}>
              <Chip style={style.tag}>
                Real Estate
              </Chip>
              <Chip style={style.tag}>
                B2B
              </Chip>
              <Chip style={style.tag}>
                SaaS
              </Chip>
            </div>
          </div>
          <div style={style.item}>
            <List style={style.members}>
              <ListItem
                primaryText="Chelsea Otakan"
                secondaryText="CEO"
                rightAvatar={<Avatar src={user2img} />}
              />
              <ListItem
                primaryText="Eric Hoffman"
                secondaryText="CTO"
                rightAvatar={<Avatar src={user1img} />}
              />
              <ListItem
                primaryText="Kerem Suer"
                rightAvatar={<Avatar src={user2img} />}
              />
              <ListItem
                primaryText="James Anderson"
                secondaryText="Marketing"
                rightAvatar={<Avatar src={user1img} />}
              />
            </List>
          </div>
        </div>

        <div style={style.item}>
          <h3>Recent Activities</h3>
          <div style={style.actionItem}>
            <Avatar src={user1img} alt="" />
            <div style={style.actionItemText}>
              <span style={style.greenText}>Done</span> - Design an MVP
            </div>
            <div style={style.actionItemDue}>
              Yesterday
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user2img} alt="" />
            <div style={style.actionItemText}>
              <span style={style.greenText}>Done</span> - Write marketing content
            </div>
            <div style={style.actionItemDue}>
              Yesterday
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user1img} alt="" />
            <div style={style.actionItemText}>
              Mentoring Session
            </div>
            <div style={style.actionItemDue}>
              2 days ago
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user2img} alt="" />
            <div style={style.actionItemText}>
              <span style={style.greenText}>Done</span> - Test prototype with 20 users
            </div>
            <div style={style.actionItemDue}>
              1 week ago
            </div>
          </div>
        </div>

        <div style={style.item}>
          <h3>Notes</h3>
          <div style={style.notesContainer}>
            <div style={style.notes}>
              <h4>Public</h4>
              <TextField
                multiLine={true}
                rows={10}
                fullWidth={true}
                id="notes_public"
              />
            </div>
            <div style={style.notes}>
              <h4>Private</h4>
              <TextField
                multiLine={true}
                rows={10}
                fullWidth={true}
                id="notes_private"
              />
            </div>
          </div>
        </div>

        <div style={style.item}>
          <h3>Action Items</h3>
          <div style={style.actionItem}>
            <Avatar src={user1img} alt="" />
            <div style={style.actionItemText}>
              Design an MVP
            </div>
            <div style={style.actionItemDueRed}>
              Due
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user2img} alt="" />
            <div style={style.actionItemText}>
              Write marketing content
            </div>
            <div style={style.actionItemDue}>
              Due tomorrow
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user1img} alt="" />
            <div style={style.actionItemText}>
              Brainstorm for potential model businesses
            </div>
            <div style={style.actionItemDue}>
              Due in 3 days
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user2img} alt="" />
            <div style={style.actionItemText}>
              Build a mockup of the prototype
            </div>
            <div style={style.actionItemDue}>
              Due in 3 days
            </div>
          </div>
          <div style={style.actionItem}>
            <Avatar src={user2img} alt="" />
            <div style={style.actionItemText}>
              Test prototype with 20 users
            </div>
            <div style={style.actionItemDue}>
              Due in 1 week
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const ConnectedStartUp = connect(mapStateToProps)(StartUp)

export default ConnectedStartUp
