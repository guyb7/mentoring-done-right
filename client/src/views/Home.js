import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import { grey800, blueGrey50, blueGrey200, blueGrey300, red300, green300 } from 'material-ui/styles/colors'

import user1img from '../img/user-1.jpg'
import user2img from '../img/user-2.jpg'

const style = {
  container: {
    height: '100%',
    maxWidth: 900,
    color: grey800
  },
  tabsContainer: {
    marginBottom: 24
  },
  tabs: {
    backgroundColor: blueGrey50
  },
  tabChosenIndicator: {
    backgroundColor: blueGrey300,
  },
  tab: {
    color: blueGrey200
  },
  tabChosen: {
    color: blueGrey300
  },
  item: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 24
  },
  title: {
    marginTop: 0
  },
  metricsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  metric: {
    textAlign: 'center'
  },
  metricTitle: {
    color: blueGrey300,
    fontSize: 12,
    fontWeight: 300
  },
  metricValue: {
    color: grey800,
    fontSize: 36,
    marginTop: 6
  },
  metricDeltaText: {
    color: blueGrey300,
    fontSize: 12,
    fontWeight: 300,
    fontStyle: 'italic'
  },
  red: {
    color: red300
  },
  green: {
    color: green300
  }
}

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Home'))
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <h2 style={style.title}>Post</h2>
          <p>
            
          </p>
        </div>

        <div style={style.item}>
          <h2 style={style.title}>Feed</h2>
          <List>
            <ListItem
              leftAvatar={<Avatar src={user1img} />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user2img} />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: blueGrey300}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user1img} />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user2img} />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: blueGrey300}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user1img} />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user2img} />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: blueGrey300}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user1img} />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={user2img} />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: blueGrey300}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: blueGrey300}}>Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
