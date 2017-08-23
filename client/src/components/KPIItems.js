import React, { Component } from 'react'

import LinearProgress from 'material-ui/LinearProgress'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

import { blueGrey800, red800, blue500 } from 'material-ui/styles/colors'
import user2img from '../img/user-2.jpg'

const style = {
  container: {
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20
  },
  actionItemText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1
  },
  actionItemProgress: {
    marginLeft: 10,
    width: 150
  }
}

const items = [{
  id: 1,
  text: 'Build a mockup of the prototype',
  value: 45,
  color: blue500
}, {
  id: 2,
  text: 'Write a business plan',
  value: 85,
  color: blue500
},{
  id: 3,
  text: 'Marketing plan brainstorm',
  value: 35,
  color: red800
}]

class KPIItems extends Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.actionItem}>
          <TextField
            style={style.actionItemText}
            id="action-item"
            hintText="Add new KPI"
            />
        </div>
        {
          items.map(i => <div style={style.actionItem} key={i.id}>
            <LinearProgress style={style.actionItemProgress} mode="determinate" value={i.value} color={i.color} />
            <div style={style.actionItemText}>
              {i.text}
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default KPIItems
