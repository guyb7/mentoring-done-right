import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'

import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right'
import { grey800 } from 'material-ui/styles/colors'

import company1img from '../img/company-1.jpg'
import company2img from '../img/company-2.jpg'

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

class Opportunities extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Opportunities'))
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <List>
            <Subheader>Infrastructure</Subheader>
            <ListItem
              leftAvatar={<Avatar src={company1img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="Microsoft Azure Startup Grant"
              secondaryText={
                <p>
                  Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={company2img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="IBM Watson"
              secondaryText={
                <p>
                  Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={company1img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="Microsoft Azure Startup Grant"
              secondaryText={
                <p>
                  Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={company2img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="IBM Watson"
              secondaryText={
                <p>
                  Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language.
                </p>
              }
              secondaryTextLines={2}
            />
            <Subheader>Sponsorships and Grants</Subheader>
            <ListItem
              leftAvatar={<Avatar src={company1img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="Microsoft Azure Startup Grant"
              secondaryText={
                <p>
                  Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={company2img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="IBM Watson"
              secondaryText={
                <p>
                  Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={company1img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="Microsoft Azure Startup Grant"
              secondaryText={
                <p>
                  Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src={company2img} />}
              rightIcon={<ChevronRightIcon />}
              primaryText="IBM Watson"
              secondaryText={
                <p>
                  Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </List>
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

const ConnectedOpportunities = connect(mapStateToProps)(Opportunities)

export default withRouter(ConnectedOpportunities)
