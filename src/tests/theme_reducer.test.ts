import { switchThemeReducer } from "../state/switch-theme-reducer"
import { SWITCH_THEME } from "../state/types"

describe('theme reducer', () => {
  const state = {
    mode: 'light'
  }

  it('check that state initialized', () => {
    const action: any = {}
    expect(switchThemeReducer(undefined, action)).toEqual(state)
  })
  
  it('checks that the mode is reversed', () => {
    const action: any = {
      type: SWITCH_THEME,
      mode: 'dark'
    }
    expect(switchThemeReducer(state, action)).toEqual({
      ...state,
      mode: action.mode
    })
  })
})