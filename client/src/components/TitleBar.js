import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { blueGrey700 } from 'material-ui/styles/colors'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: blueGrey700,
    backgroundColor: '#fff',
    padding: 24,
    fontWeight: 300
  }
}

class TitleBar extends Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        {this.props.title || 'Overview'}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title.title
  }
}

const ConnectedTitleBar = connect(mapStateToProps)(TitleBar)

export default withRouter(ConnectedTitleBar)
