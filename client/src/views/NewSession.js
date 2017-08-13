import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import { blueGrey50, grey800, green300, red300 } from 'material-ui/styles/colors'

import SendIcon from 'material-ui/svg-icons/content/send'
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
  headerNotes: {
    flex: 1
  },
  logo: {
    width: 'auto',
    height: 100,
    marginLeft: 20
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
  actionItemMember: {
    width: 120
  },
  actionItemText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1
  },
  actionItemDue: {
    marginLeft: 10,
    width: 100
  },
  submitContainer: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  submit: {
    margin: 20
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
    this.props.dispatch(actionCreators.setTitle('New Session'))
  }

  changePage(page) {
    this.props.history.push(page)
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <div style={style.header}>
            <div style={style.headerNotes}>
              <h2>Reesio - Notes</h2>
              <div>
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
            </div>
            <div>
              <img src={startupReesioImg} alt="" style={style.logo} />
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
        </div>

        <div style={style.item}>
          <h3>Action Items</h3>
          <div style={style.actionItem}>
            <SelectField
              value={1}
              style={style.actionItemMember}
            >
              <MenuItem value={1} primaryText="Chelsea" />
              <MenuItem value={2} primaryText="Kerem" />
              <MenuItem value={3} primaryText="James" />
              <MenuItem value={4} primaryText="Eric" />
            </SelectField>
            <TextField
              style={style.actionItemText}
              id="action-item"
              />
            <DatePicker
              textFieldStyle={style.actionItemDue}
              hintText="Due Date" />
          </div>
          <div style={style.actionItem}>
            <SelectField
              value={1}
              style={style.actionItemMember}
            >
              <MenuItem value={1} primaryText="Chelsea" />
              <MenuItem value={2} primaryText="Kerem" />
              <MenuItem value={3} primaryText="James" />
              <MenuItem value={4} primaryText="Eric" />
            </SelectField>
            <TextField
              style={style.actionItemText}
              id="action-item"
              />
            <DatePicker
              textFieldStyle={style.actionItemDue}
              hintText="Due Date" />
          </div>
          <div style={style.actionItem}>
            <SelectField
              value={1}
              style={style.actionItemMember}
            >
              <MenuItem value={1} primaryText="Chelsea" />
              <MenuItem value={2} primaryText="Kerem" />
              <MenuItem value={3} primaryText="James" />
              <MenuItem value={4} primaryText="Eric" />
            </SelectField>
            <TextField
              style={style.actionItemText}
              id="action-item"
              />
            <DatePicker
              textFieldStyle={style.actionItemDue}
              hintText="Due Date" />
          </div>
          <div style={style.submitContainer}>
            <RaisedButton
              label="Save"
              primary={true}
              icon={<SendIcon />}
              style={style.submit} />
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
