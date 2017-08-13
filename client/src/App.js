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
import Dashboard from './views/Dashboard'
import AllStartUps from './views/AllStartUps'
import StartUp from './views/StartUp'
import NewSession from './views/NewSession'
import Members from './views/Members'
import Files from './views/Files'

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
                <Route exact path="/start-ups/:startupName/new-session" component={NewSession}/>
                <Route exact path="/start-ups/:startupName/files" component={Files}/>
                <Route exact path="/members" component={Members}/>
                <Route exact path="/dashboard" component={Dashboard}/>
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
