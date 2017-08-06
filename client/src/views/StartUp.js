import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import Chip from 'material-ui/Chip'
import { grey800, blueGrey300, green300, red300 } from 'material-ui/styles/colors'

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
              <p>A modern transaction management system for todays busy real estate professional.</p>
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
          <h3>Looking For</h3>
          <div style={style.actionItem}>
            <div style={style.actionItemText}>
              Marketing Expert
            </div>
            <div style={style.actionItemDue}>
              We look for someone with good experience in marketing
            </div>
          </div>
          <div style={style.actionItem}>
            <div style={style.actionItemText}>
              Content Writer
            </div>
            <div style={style.actionItemDue}>
              Fluent in English with technical background
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
