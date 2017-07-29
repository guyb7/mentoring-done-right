import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import TextField from 'material-ui/TextField'
import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'

import { grey800, grey300 } from 'material-ui/styles/colors'

import startupReesioImg from '../img/startup-reesio.png'
import startupCanvaImg from '../img/startup-canva.png'
import startupTunaImg from '../img/startup-tuna.jpg'
import user1img from '../img/user-1.jpg'
import user2img from '../img/user-2.jpg'

const style = {
  container: {
    height: '100%',
    maxWidth: 900,
    color: grey800
  },
  filter: {
    width: '100%'
  },
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 40
  },
  tile: {
    cursor: 'pointer'
  },
  tileTitle: {
    textAlign: 'center',
    color: grey800,
    marginLeft: -15,
  }
}

const tilesData1 = [
  {
    img: user1img,
    title: 'Chelsea Otakan',
    description: 'Biz-Dev',
  }, {
    img: user1img,
    title: 'Eric Hoffman',
    description: 'Marketing',
  }, {
    img: user1img,
    title: 'Kerem Suer',
    description: 'Sales',
  }, {
    img: user1img,
    title: 'James Anderson',
    description: 'Biz-Dev',
  }, {
    img: user1img,
    title: 'Chelsea Otakan',
    description: 'Biz-Dev',
  }, {
    img: user1img,
    title: 'Eric Hoffman',
    description: 'Marketing',
  }, {
    img: user1img,
    title: 'Kerem Suer',
    description: 'Sales',
  }, {
    img: user1img,
    title: 'James Anderson',
    description: 'Biz-Dev',
  }
]

const tilesData2 = [
  {
    img: user2img,
    title: 'Chelsea Otakan',
    description: 'CEO at Reesio',
  }, {
    img: user2img,
    title: 'Eric Hoffman',
    description: 'CTO at Canva',
  }, {
    img: user2img,
    title: 'Kerem Suer',
    description: 'Sales at Reesio',
  }, {
    img: user2img,
    title: 'James Anderson',
    description: 'Growth at Tuna',
  }, {
    img: user2img,
    title: 'Chelsea Otakan',
    description: 'CEO at Reesio',
  }, {
    img: user2img,
    title: 'Eric Hoffman',
    description: 'CTO at Canva',
  }, {
    img: user2img,
    title: 'Kerem Suer',
    description: 'Sales at Reesio',
  }, {
    img: user2img,
    title: 'James Anderson',
    description: 'Growth at Tuna',
  }, {
    img: user2img,
    title: 'Eric Hoffman',
    description: 'CTO at Canva',
  }, {
    img: user2img,
    title: 'Kerem Suer',
    description: 'Sales at Reesio',
  }, {
    img: user2img,
    title: 'James Anderson',
    description: 'Growth at Tuna',
  }, {
    img: user2img,
    title: 'Chelsea Otakan',
    description: 'CEO at Reesio',
  }, {
    img: user2img,
    title: 'Eric Hoffman',
    description: 'CTO at Canva',
  }, {
    img: user2img,
    title: 'Kerem Suer',
    description: 'Sales at Reesio',
  }, {
    img: user2img,
    title: 'James Anderson',
    description: 'Growth at Tuna',
  }, {
    img: user2img,
    title: 'Eric Hoffman',
    description: 'CTO at Canva',
  }, {
    img: user2img,
    title: 'Kerem Suer',
    description: 'Sales at Reesio',
  }, {
    img: user2img,
    title: 'James Anderson',
    description: 'Growth at Tuna',
  }, {
    img: user2img,
    title: 'Chelsea Otakan',
    description: 'CEO at Reesio',
  }, {
    img: user2img,
    title: 'Eric Hoffman',
    description: 'CTO at Canva',
  }, {
    img: user2img,
    title: 'Kerem Suer',
    description: 'Sales at Reesio',
  }, {
    img: user2img,
    title: 'James Anderson',
    description: 'Growth at Tuna',
  }
]

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Members'))
  }

  changePage(page) {
    this.props.history.push(page)
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.item}>
          <TextField hintText="Filter" />
        </div>

        <div style={style.listContainer}>
          <Subheader>Mentors</Subheader>
          <GridList
            cellHeight={250}
            cols={4}
            padding={50}
          >
            {tilesData1.map((tile, n) => (
              <GridTile
                key={n}
                title={tile.title}
                subtitle={tile.description}
                style={style.tile}
                titleStyle={style.tileTitle}
                subtitleStyle={style.tileTitle}
                titleBackground={grey300}
                onClick={e => this.changePage('/members/mentors/chelsea-otakan')}
              >
                <img src={tile.img} alt="" />
              </GridTile>
            ))}
          </GridList>
        </div>

        <div style={style.listContainer}>
          <Subheader>Members</Subheader>
          <GridList
            cellHeight={200}
            cols={4}
            padding={80}
          >
            {tilesData2.map((tile, n) => (
              <GridTile
                key={n}
                title={tile.title}
                subtitle={tile.description}
                style={style.tile}
                titleStyle={style.tileTitle}
                subtitleStyle={style.tileTitle}
                titleBackground={grey300}
                onClick={e => this.changePage('/members/start-ups/eric-hoffman')}
              >
                <img src={tile.img} alt="" />
              </GridTile>
            ))}
          </GridList>
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

const ConnectedMembers = connect(mapStateToProps)(Members)

export default withRouter(ConnectedMembers)
