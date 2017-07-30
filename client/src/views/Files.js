import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actionCreators from '../store/action-creators'

import { GridList, GridTile } from 'material-ui/GridList'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { grey800, grey300 } from 'material-ui/styles/colors'

import pdfIcon from '../img/pdf-icon.png'
import wordIcon from '../img/word-icon.png'

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
  },
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20
  }
}

const filesData = [
  {
    img: wordIcon,
    title: 'Business Plan'
  }, {
    img: pdfIcon,
    title: 'Pitch Deck'
  }, {
    img: wordIcon,
    title: 'Pitch Deck - New'
  }, {
    img: pdfIcon,
    title: 'Marketing'
  }
]

class Files extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(actionCreators.setTitle('Reesio - Files'))
  }

  changePage(page) {
    this.props.history.push(page)
  }

  render () {
    return (
      <div style={{ ...this.props.style, ...style.container }}>
        <div style={style.listContainer}>
          <GridList
            cellHeight={200}
            cols={3}
            padding={50}
          >
            {filesData.map((tile, n) => (
              <GridTile
                key={n}
                title={tile.title}
                style={style.tile}
                titleStyle={style.tileTitle}
                subtitleStyle={style.tileTitle}
                titleBackground={grey300}
                onClick={e => this.changePage('/Files/mentors/chelsea-otakan')}
              >
                <img src={tile.img} alt="" />
              </GridTile>
            ))}
          </GridList>
          <FloatingActionButton style={style.fab}>
            <ContentAdd />
          </FloatingActionButton>
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

const ConnectedFiles = connect(mapStateToProps)(Files)

export default withRouter(ConnectedFiles)
