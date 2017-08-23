import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import { grey800 } from 'material-ui/styles/colors'

import calendar1 from '../img/calendar-1.jpg'

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
  img: {
    width: '100%',
    height: 'auto'
  }
}

class Agenda extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Agenda'))
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <img src={calendar1} alt="" style={style.img} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const ConnectedAgenda = connect(mapStateToProps)(Agenda)

export default withRouter(ConnectedAgenda)
