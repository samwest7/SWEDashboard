import { connect } from 'react-redux'
import { compose } from 'redux'
import appBar from '../app-bar-menu'

const id = e => e

export default ({redux, appBarMenu}) => WrappedComponent => {
  const _appBarMenu = appBarMenu ? appBar() : id
  const _connect = redux ? connect(redux.mapState, redux.mapDispatch) :id
  const finalHoc = compose(_connect, _appBarMenu)

  return finalHoc(WrappedComponent)
}
