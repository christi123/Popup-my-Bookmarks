/* @flow */

import {combineReducers} from 'redux'
import {static as Immutable} from 'seamless-immutable'

import {
  DRAG_INDICATOR,
  PUT_DRAG_INDICATOR,
  REMOVE_DRAG_INDICATOR,
  REMOVE_TREE_INFOS_FROM_INDEX,
  REPLACE_TREE_INFO_BY_INDEX,
  UPDATE_COPY_TARGET,
  UPDATE_CUT_TARGET,
  UPDATE_DRAG_TARGET,
  UPDATE_EDITOR_TARGET,
  UPDATE_FOCUS_TARGET,
  UPDATE_IS_CREATING_NEW_FOLDER,
  UPDATE_MENU_TARGET,
  UPDATE_MOUSE_POSITION,
  UPDATE_SEARCH_KEYWORD,
  UPDATE_TREES
} from '../constants'
import {
  genDummyItemInfo,
  getSlicedTrees
} from '../functions'

const rootReducer: Function = combineReducers({
  copyTarget(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case UPDATE_COPY_TARGET:
        return action.copyTarget

      case UPDATE_CUT_TARGET:
        return null

      default:
        return state
    }
  },

  cutTarget(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case UPDATE_COPY_TARGET:
        return null

      case UPDATE_CUT_TARGET:
        return action.cutTarget

      default:
        return state
    }
  },

  dragIndicator(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case PUT_DRAG_INDICATOR: {
        const {
          isPlaceAfter,
          itemInfo
        }: {
          isPlaceAfter: boolean,
          itemInfo: Object
        } = action

        return Immutable({
          ...genDummyItemInfo(),
          id: DRAG_INDICATOR,
          index: Math.max(itemInfo.index, 0) + (isPlaceAfter ? 1 : 0),
          parentId: itemInfo.parentId
        })
      }

      case REMOVE_DRAG_INDICATOR:
        return null

      default:
        return state
    }
  },

  dragTarget(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case UPDATE_DRAG_TARGET:
        return action.dragTarget

      default:
        return state
    }
  },

  editorTarget(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case UPDATE_EDITOR_TARGET:
        return action.editorTarget

      default:
        return state
    }
  },

  focusTarget(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case UPDATE_FOCUS_TARGET:
        return action.focusTarget

      default:
        return state
    }
  },

  isCreatingNewFolder(
    state: boolean = false,
    action: Object
  ): boolean {
    switch (action.type) {
      case UPDATE_EDITOR_TARGET:
        if (action.editorTarget === null) return false
        return state

      case UPDATE_IS_CREATING_NEW_FOLDER:
        return action.isCreatingNewFolder

      default:
        return state
    }
  },

  itemOffsetHeight(
    state: number = 0
  ): number {
    return state
  },

  menuTarget(
    state: ?Object = null,
    action: Object
  ): ?Object {
    switch (action.type) {
      case UPDATE_MENU_TARGET:
        return action.menuTarget

      default:
        return state
    }
  },

  mousePosition(
    state: Object = Immutable({x: 0, y: 0}),
    action: Object
  ): Object {
    switch (action.type) {
      case UPDATE_MOUSE_POSITION:
        return action.mousePosition

      default:
        return state
    }
  },

  options(
    state: Object = Immutable({})
  ): Object {
    return state
  },

  rootTree(
    state: Object = Immutable({})
  ): Object {
    return state
  },

  searchKeyword(
    state: string = '',
    action: Object
  ): string {
    switch (action.type) {
      case UPDATE_SEARCH_KEYWORD:
        return action.searchKeyword

      default:
        return state
    }
  },

  trees(
    state: Object[] = Immutable([]),
    action: Object
  ): Object[] {
    switch (action.type) {
      case REMOVE_TREE_INFOS_FROM_INDEX:
        return getSlicedTrees(state, action.removeFromIndex)

      case REPLACE_TREE_INFO_BY_INDEX:
        return Immutable.set(state, action.treeIndex, action.treeInfo)

      case UPDATE_TREES:
        return action.trees

      default:
        return state
    }
  }
})

export default rootReducer
