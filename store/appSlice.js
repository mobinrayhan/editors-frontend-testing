// import node module libraries
import { createSlice } from '@reduxjs/toolkit'

// import app config file
import { settings } from 'app.config';

const initialState = {
  version: settings.app.version,
  skin: settings.theme.skin,
  selectedSkinMode: settings.theme.skin,
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSkin: (state, action) => {
      state.skin = action.payload;
    },
    setSkinModeConfig: (state, action) => {
      state.selectedSkinMode = action.payload;
    }
  },
})

export const { changeSkin, setSkinModeConfig } = appSlice.actions

export default appSlice.reducer