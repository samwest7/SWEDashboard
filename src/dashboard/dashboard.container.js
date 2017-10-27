import Dashboard from './dashboard.presentation'
import hocs from '../common-hocs'

const mapState = (state, props) => ({})

const mapDispatch = {}

export default hocs({
  // auth: ['user'],
  redux: {
    mapState,
    mapDispatch
  },
  appBarMenu: true,
})(Dashboard)
