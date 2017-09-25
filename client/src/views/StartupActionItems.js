import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import ActionItems from '../components/ActionItems'
import KPIItems from '../components/KPIItems'
import { grey800 } from 'material-ui/styles/colors'

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
  }
}

class StartUpActionItems extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Action Items'))
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>

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

const ConnectedStartUpActionItems = connect(mapStateToProps)(StartUpActionItems)

export default ConnectedStartUpActionItems
