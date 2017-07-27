import React, { Component } from 'react'

import logo from '../img/logo-eisp.png'
import { blueGrey800, blueGrey200 } from 'material-ui/styles/colors'

const style = {
  container: {
    backgroundColor: blueGrey800,
    color: blueGrey200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 300
  },
  logo: {
    height: 40,
    margin: 10
  }
}

class Logo extends Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <img style={style.logo} src={logo} alt="Logo"/>
        8200 EISP
      </div>
    )
  }
}

export default Logo
