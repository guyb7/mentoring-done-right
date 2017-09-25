import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { grey800 } from 'material-ui/styles/colors'

import Calendar from '../components/Calendar'

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
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
}

class Agenda extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Agenda'))
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div>
          <h4>January</h4>
          <Calendar year="2018" month="01" events={[]} />
          <h4>February</h4>
          <Calendar year="2018" month="02" events={[]} />
          <h4>March</h4>
          <Calendar year="2018" month="03" events={[]} />
          <h4>April</h4>
          <Calendar year="2018" month="04" events={[]} />
        </div>
        {
          this.props.user.user_type === 'accelerator' &&
          <FloatingActionButton style={style.fab}>
            <ContentAdd />
          </FloatingActionButton>
        }
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
