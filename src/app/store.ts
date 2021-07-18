import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import FrmModalLoading_Actions from "../forms/Modal/FrmModalLoadingSlice";

import FrmModalOlvidoIngresarDatos_Actions from "../forms/Modal/FrmModalOlvidoIngresarDatosSlice";
import Persona_Actions from "../IEntities/IPersonaSlice";

export const Store = configureStore({
  reducer: {
    FrmModalOlvidoIngresarDatos: FrmModalOlvidoIngresarDatos_Actions,
    FrmModalLoading: FrmModalLoading_Actions,
    Persona: Persona_Actions,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
