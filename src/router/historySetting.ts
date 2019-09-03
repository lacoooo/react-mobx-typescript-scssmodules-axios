import { createBrowserHistory } from 'history'

const history = createBrowserHistory({
  basename: '',
  forceRefresh: false,
  keyLength: 6,
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})

export default history
