import * as React from 'react'
import style from './topbar.scss'
import { RouteComponentProps, withRouter } from 'react-router'

interface TopbarState {
  user: any
  role: number
}

class Topbar extends React.Component<RouteComponentProps, TopbarState> {
  constructor(props: any) {
    super(props)
    this.state = {
      user: null,
      role: 0
    }
  }

  public componentWillMount() {
    const token = localStorage.getItem('token')
    if (token) {
      const item = JSON.parse(window.atob(token.split('.')[1]))
      if (item && item.type === 1 && item.role === 2) {
        this.setState({
          role: 2
        })
      }
    }
  }

  public render() {
    return (
      <div
        className={style['topbar-container']}
        style={{
          display: `${
            this.props.location.pathname.indexOf('agent') === -1
              ? 'flex'
              : 'none'
          }`
        }}
      >
        <div style={{ flex: 1 }} />
      </div>
    )
  }
}

export default withRouter(Topbar)
