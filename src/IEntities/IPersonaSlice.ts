import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { IPersona } from "./IPersona";

export interface IPersona_State {
  objIPersona: IPersona;
}

const inicitalState: IPersona_State = {
  objIPersona: {
    ApellidoMaterno: "",
    EsMujer: false,
    FechaNacimiento: "",
    ApellidoPaterno: "",
    Nombres: "",
    NroDeDocumento: "",
  },
};

export const Persona_Actions = createSlice({
  name: "Persona_Actions",
  initialState: inicitalState,
  reducers: {
    Persona_Action_Set: (state, action: PayloadAction<IPersona>) => {
      state.objIPersona = action.payload;
    },
    Persona_Action_Clear: (state) => {
      state = inicitalState;
    },
  },
});

export const { Persona_Action_Set, Persona_Action_Clear } =
  Persona_Actions.actions;

export const Persona_State = (state: RootState) => state.Persona;

export default Persona_Actions.reducer;
