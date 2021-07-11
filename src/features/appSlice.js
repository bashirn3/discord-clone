import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  channelName: null,
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName; 
    },
  },

});

export const { setChannelInfo} = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;


export default appSlice.reducer;