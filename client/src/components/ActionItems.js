import React, { Component } from 'react'

import Avatar from 'material-ui/Avatar'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

import { blueGrey800, blueGrey200 } from 'material-ui/styles/colors'
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
  actionItemDone: {
    color: blueGrey800,
    textDecoration: 'line-through'
  },
  actionItemMember: {
    width: 120
  },
  actionItemText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1
  },
  actionItemDue: {
    marginLeft: 10,
    width: 100
  },
  checkbox: {
    width: 'auto'
  }
}

const items = [{
  id: 1,
  status: 'active',
  text: 'Build a mockup of the prototype',
  user: user2img,
  dueText: 'Due in 3 days'
}, {
  id: 2,
  status: 'active',
  text: 'Write a business plan',
  user: user2img,
  dueText: 'Due in 4 days'
},{
  id: 3,
  status: 'done',
  text: 'Marketing plan brainstorm',
  user: user2img,
  dueText: 'Due in 3 days'
}]

class ActionItems extends Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.actionItem}>
          <TextField
            style={style.actionItemText}
            id="action-item"
            />
          <SelectField
            value={1}
            style={style.actionItemMember}
          >
            <MenuItem value={1} primaryText="Chelsea" />
            <MenuItem value={2} primaryText="Kerem" />
            <MenuItem value={3} primaryText="James" />
            <MenuItem value={4} primaryText="Eric" />
          </SelectField>
          <DatePicker
            textFieldStyle={style.actionItemDue}
            hintText="Due Date" />
        </div>
        {
          items.map(i => <div style={{ ...style.actionItem, ...(i.status === 'done' ? style.actionItemDone : {})}} key={i.id}>
            <Checkbox
              style={style.checkbox}
              checked={i.status === 'done'}
            />
            <div style={style.actionItemText}>
              {i.text}
            </div>
            <Avatar src={i.user} alt="" />
            <div style={style.actionItemDue}>
              {i.status === 'done' ? 'Done' : i.dueText}
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default ActionItems
