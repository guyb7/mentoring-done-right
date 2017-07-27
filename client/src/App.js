import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { grey100 } from 'material-ui/styles/colors'

import Logo from './components/Logo'
import TitleBar from './components/TitleBar'
import SideNav from './components/SideNav'
import Home from './views/Home'
import AllStartUps from './views/AllStartUps'
import StartUp from './views/StartUp'

const baseUrl = process.env.NODE_ENV.toUpperCase() === 'TEST' ? '' : '/app'

const style = {
  screen: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '230px auto',
    gridTemplateRows: '60px auto',
    gridTemplateAreas: `
      "logo title"
      "sidenav content"`
  },
  logo: {
    gridArea: 'logo'
  },
  title: {
    gridArea: 'title',
  },
  sidenav: {
    gridArea: 'sidenav',
    overflowX: 'hidden',
    overflowY: 'scroll'
  },
  content: {
    gridArea: 'content',
    backgroundColor: grey100,
    padding: 24,
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <MuiThemeProvider>
          <Router basename={baseUrl}>
            <div style={style.screen}>
              <Logo style={style.logo} />
              <TitleBar style={style.title} />
              <SideNav style={style.sidenav}/>
              <div style={style.content}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/start-ups" component={AllStartUps}/>
                <Route exact path="/start-ups/:startupName" component={StartUp}/>
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App