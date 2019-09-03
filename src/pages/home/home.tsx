import * as React from 'react'
import style from './home.scss'

interface CategoryProp {
  icon: string
  name: string
}

class Main extends React.Component<{}, { categoryPropList: CategoryProp[] }> {
  constructor(props: any) {
    super(props)

    this.state = {
      categoryPropList: []
    }
  }

  public render() {
    return (
      <div className={style.main}>
        <div className={style.t}>123</div>
      </div>
    )
  }
}

export default Main
