import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import { grey800 } from 'material-ui/styles/colors'

import chart1 from '../img/chart-1.png'
import chart2 from '../img/chart-2.jpg'

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

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Dashboard'))
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <img src={chart1} alt="" style={style.img} />
        </div>

        <div style={style.item}>
          <img src={chart2} alt="" style={style.img} />
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

const ConnectedDashboard = connect(mapStateToProps)(Dashboard)

export default withRouter(ConnectedDashboard)
