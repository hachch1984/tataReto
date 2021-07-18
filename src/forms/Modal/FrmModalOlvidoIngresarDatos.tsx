import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Lista from "../../components/generalControls/Lista";
import TituloSuperior from "../../components/generalControls/TituloSuperior";
import { Img_correct } from "../../utils/ImgRepository";
import FrmModal from "./FormModal";
import {
  FrmModalOlvidoIngresarDatos_Action_Hide,
  FrmModalOlvidoIngresarDatos_State,
} from "./FrmModalOlvidoIngresarDatosSlice";

const FrmModalOlvidoIngresarDatos = () => {
  const state = useAppSelector(FrmModalOlvidoIngresarDatos_State);
  const dispatch = useAppDispatch();

  const divCss: React.CSSProperties = {
    width: "400px",
    height: "400px",
    position: "absolute",
    left: "calc(50% - 200px)",
    top: "calc(50% - 200px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  

  function faltantes() {
    let items: {
      imgUrl: string;
      imgDescription: string;
    }[] = [];

    state.texto.forEach((value) =>
      items.push({ imgUrl: Img_correct, imgDescription: value })
    );
    return items;
  }

  return (
    <FrmModal>
      <div style={divCss}>
        <div className="card"  >
          <div className="card-body">
            <div className="text-center">
              <TituloSuperior
                bigTextGray="Un momento por favor"
                bigTextBlue="Olvido ingresar algunos datos"
                smallTextGray="Favor de completar la informacion requerida a continuacion"
              />
            </div>
            <Lista items={faltantes()} />

            <div className='text-center'>
              <button
                className="btn btn-primary mt-3 w-100"
                onClick={() => {
                  dispatch(FrmModalOlvidoIngresarDatos_Action_Hide());
                }}
              >
                cerrar
              </button>
            </div>
          </div>
        </div>

        <h2 className="global-font-size-h1 text-white"></h2>
      </div>
    </FrmModal>
  );
};

export default FrmModalOlvidoIngresarDatos;
/*
  <ul>
            {state.texto.map((value, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="color-blue "
                />
                <span>{value}</span>
              </li>
            ))}
          </ul>
*/
