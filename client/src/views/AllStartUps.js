import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import TextField from 'material-ui/TextField'
import { GridList, GridTile } from 'material-ui/GridList'

import { grey800, grey300 } from 'material-ui/styles/colors'

import startupReesioImg from '../img/startup-reesio.png'
import startupCanvaImg from '../img/startup-canva.png'
import startupTunaImg from '../img/startup-tuna.jpg'

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

const tilesData = [
  {
    img: startupReesioImg,
    title: 'Reesio',
    description: 'Online real estate',
  }, {
    img: startupCanvaImg,
    title: 'Canva',
    description: 'Graphic design tool',
  }, {
    img: startupTunaImg,
    title: 'Tuna',
    description: 'Musicians Collaboration',
  }, {
    img: startupReesioImg,
    title: 'Reesio',
    description: 'Online real estate',
  }, {
    img: startupCanvaImg,
    title: 'Canva',
    description: 'Graphic design tool',
  }, {
    img: startupTunaImg,
    title: 'Tuna',
    description: 'Musicians Collaboration',
  }, {
    img: startupReesioImg,
    title: 'Reesio',
    description: 'Online real estate',
  }, {
    img: startupCanvaImg,
    title: 'Canva',
    description: 'Graphic design tool',
  }, {
    img: startupTunaImg,
    title: 'Tuna',
    description: 'Musicians Collaboration',
  },
]

class AllStartUps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('All Teams'))
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
          <GridList
            cellHeight={200}
            cols={4}
            padding={20}
          >
            {tilesData.map((tile, n) => (
              <GridTile
                key={n}
                title={tile.title}
                subtitle={tile.description}
                style={style.tile}
                titleStyle={style.tileTitle}
                subtitleStyle={style.tileTitle}
                titleBackground={grey300}
                onClick={e => this.changePage('/start-ups/reesio')}
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

const ConnectedAllStartUps = connect(mapStateToProps)(AllStartUps)

export default withRouter(ConnectedAllStartUps)
