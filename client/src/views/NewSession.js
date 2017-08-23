import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import ActionItems from '../components/ActionItems'
import KPIItems from '../components/KPIItems'
import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import LockIcon from 'material-ui/svg-icons/action/lock-open'
import { grey50, grey800 } from 'material-ui/styles/colors'

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
  notes: {
    flex: 1,
    margin: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: grey50,
  },
  notesUnlock: {
    minHeight: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class StartUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notesAcceleratorVisible: false,
      notesPrivateVisible: false
    }
  }

  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('New Session'))
  }

  changePage(page) {
    this.props.history.push(page)
  }

  showNotes(type) {
    this.setState({
      ...this.state,
      [type === 'accelerator' ? 'notesAcceleratorVisible' : 'notesPrivateVisible']: true
    })
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <div style={style.header}>
            <div style={style.headerNotes}>
              <h2>Reesio - Notes</h2>
              <div style={style.notes}>
                <h4>Notes to Accelerator</h4>
                {
                  !this.state.notesAcceleratorVisible &&
                  <div style={style.notesUnlock}>
                    <IconButton onTouchTap={e => this.showNotes('accelerator')}>
                      <LockIcon />
                    </IconButton>
                  </div>
                }
                {
                  this.state.notesAcceleratorVisible &&
                  <TextField
                    value="Interesting team, good product idea. need legal guidance"
                    multiLine={true}
                    rows={6}
                    fullWidth={true}
                    id="notes_public"
                  />
                }
              </div>
              <div style={style.notes}>
                <h4>Private to you only</h4>
                {
                  !this.state.notesPrivateVisible &&
                  <div style={style.notesUnlock}>
                    <IconButton onTouchTap={e => this.showNotes('private')}>
                      <LockIcon />
                    </IconButton>
                  </div>
                }
                {
                  this.state.notesPrivateVisible &&
                  <TextField
                    value="Eric is the one driving the project. James need some motivation, lacking energy."
                    multiLine={true}
                    rows={6}
                    fullWidth={true}
                    id="notes_private"
                  />
                }
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
          <ActionItems />
        </div>

        <div style={style.item}>
          <h3>KPIs</h3>
          <KPIItems />
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
