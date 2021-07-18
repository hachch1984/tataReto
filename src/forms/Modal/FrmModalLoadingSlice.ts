import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
 
 

export interface IFrmModalLoading_State {
  show: boolean;
}

const initialState: IFrmModalLoading_State = {
  show: false,
};

export const FrmModalLoading_Actions = createSlice({
   name: "FrmModalLoading_Actions",
  initialState,
  reducers: {
    FrmModalLoading_Action_Show: (
      state,
      
    ) => {
      state.show = true;
    },
    FrmModalLoading_Action_Hide: (
      state,
      
    ) => {
      state.show = false;
    },
  },
}); 

export const {  FrmModalLoading_Action_Show ,FrmModalLoading_Action_Hide} =
  FrmModalLoading_Actions.actions;

export const FrmModalLoading_State = (state: RootState) =>
  state.FrmModalLoading;

export default FrmModalLoading_Actions.reducer;
