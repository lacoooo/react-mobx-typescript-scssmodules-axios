import history from './historySetting'
import * as React from 'react'
import { Route, Router } from 'react-router-dom'
import DefaultLayout from 'src/layout/default'

const Home = React.lazy(() => import('src/pages/home/home'))

class App extends React.Component {
  public render() {
    const pathname = history.location.pathname
    console.log(pathname)
    return (
      <Router history={history}>
        {true ? (
          <DefaultLayout history={history}>
            <Route exact={true} path="/" component={Home} />
            {/* <Route path="/control/main" component={ControlMain} /> */}
          </DefaultLayout>
        ) : null}
      </Router>
    )
  }
}

export default App
