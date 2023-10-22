import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const infoDataSlice = createSlice({
  name: "infoData",
  initialState,
  reducers: {
    setInfoData: (state: any, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setInfoData } = infoDataSlice.actions;
export default infoDataSlice.reducer;
