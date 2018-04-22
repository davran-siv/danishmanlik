import * as React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import {NotFoundScene} from './scenes/NotFoundScene'
import IndexSceneContainer from './scenes/IndexScene'
import TopMenu from './components/ui/top-menu'
import Footer from './components/ui/footer'
import './vendor/styles/application.scss'
import MedicalInsuranceSceneContainer from './scenes/MedicalInsuranceScene'
import ContactSceneContainer from './scenes/ContactScene/Contact'
import ResidenceSceneContainer from './scenes/ResidenceScene'


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
          {/*<TopMenu/>*/}
          <div className="page-content">
            <Switch>
              <Route path="/" exact component={IndexSceneContainer}/>
              <Route path="/residence" exact component={ResidenceSceneContainer}/>
              <Route path="/medical-insurance" exact component={MedicalInsuranceSceneContainer}/>
              <Route path="/contact" exact component={ContactSceneContainer}/>
              <Route path="/404" component={NotFoundScene}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

