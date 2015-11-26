import * as types from '../constants/ActionTypes'

export function toggleUnplayed(episodeName) {
    return { type: types.TOGGLE_UNPLAYED, episodeName }
}
