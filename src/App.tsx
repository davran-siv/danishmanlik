import * as React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import {NotFoundScene} from './scenes/NotFoundScene'
import IndexSceneContainer from './scenes/IndexScene'
import TopMenu from './components/ui/top-menu'
import Footer from './components/ui/footer'
import './vendor/styles/application.scss'
import MedicalInsuranceSceneContainer from './scenes/MedicalInsuranceScene'


const history = createBrowserHistory()

export default class App extends React.Component<{}, {}> {
  
  constructor(props: {}, context?: any) {
    super(props, context)
    console.info('react started render')
  }
  
  render() {
    return (
      <Router history={history}>
        <div>
          <TopMenu/>
          <div className="page-content">
            <Switch>
              <Route path="/" exact component={IndexSceneContainer}/>
              <Route path="/medical-insurance" exact component={MedicalInsuranceSceneContainer}/>
              <Route path="/error" component={NotFoundScene}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

