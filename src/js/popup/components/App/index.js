import {connect} from 'react-redux'

import App from './App'
import {closeMenu, dragEnd, onPressArrowKey, openMenu, renewTrees} from '../../actions'

const mapDispatchToProps = {
  closeMenu,
  dragEnd,
  onPressArrowKey,
  openMenu,
  renewTrees
}

const mapStateToProps = (state) => ({
  dragIndicator: state.dragIndicator,
  dragTarget: state.dragTarget,
  editorTarget: state.editorTarget,
  focusTarget: state.focusTarget,
  isSearching: Boolean(state.searchKeyword),
  menuTarget: state.menuTarget,
  options: state.options,
  selectedMenuItem: state.selectedMenuItem,
  trees: state.trees
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
