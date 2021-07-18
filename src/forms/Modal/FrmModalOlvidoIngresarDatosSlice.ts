import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IFrmModalOlvidoIngresarDatos_State {
  show: boolean;
  texto: string[];
}

const initialState: IFrmModalOlvidoIngresarDatos_State = {
  show: false,
  texto: [],
};

export const FrmModalOlvidoIngresarDatos_Actions = createSlice({
  name: "FrmModalOlvidoIngresarDatos_Actions",
  initialState,
  reducers: {
    FrmModalOlvidoIngresarDatos_Action_Show: (
      state,
      action: PayloadAction<{texto:string[]}>
    ) => {
      state.show = true;
      state.texto = action.payload.texto;
    },
    FrmModalOlvidoIngresarDatos_Action_Hide: (state) => {
      state.show = false;
      state.texto = [];
    },
  },
});

export const {
    FrmModalOlvidoIngresarDatos_Action_Show,FrmModalOlvidoIngresarDatos_Action_Hide
} = FrmModalOlvidoIngresarDatos_Actions.actions;

export const FrmModalOlvidoIngresarDatos_State = (state: RootState) =>
  state.FrmModalOlvidoIngresarDatos;

export default FrmModalOlvidoIngresarDatos_Actions.reducer;
