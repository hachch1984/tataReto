import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import Button from "../components/generalControls/Button";
import CheckBoxAceptoLa from "../components/generalControls/CheckBoxAceptoLa";
import InputControl from "../components/generalControls/InputControl";
import Lista from "../components/generalControls/Lista";
import TituloSuperior from "../components/generalControls/TituloSuperior";
import { IPersona } from "../IEntities/IPersona";
import { Persona_Action_Set } from "../IEntities/IPersonaSlice";
import { Img_MobilePhone, Img_Shield } from "../utils/ImgRepository";
import { UrlGenerator } from "../utils/UrlGenerator";
import { Form002_Url } from "./Form002";
import MainLayout from "./MainLayout";
import {
  FrmModalLoading_Action_Hide,
  FrmModalLoading_Action_Show,
} from "./Modal/FrmModalLoadingSlice";
import { FrmModalOlvidoIngresarDatos_Action_Show } from "./Modal/FrmModalOlvidoIngresarDatosSlice";
const Form001 = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState({
    numeroDocumento: "",
    fechaNacimiento: "",
    celular: "",
  });

  const ContenidoBloqueAzul = (
    <div className="h-100 d-flex flex-column justify-content-between  ">
      <div className="text-one  mt-5 mb-3 ">
        <h1>Seguro de</h1>
        <h2>Salud</h2>
      </div>
      <Lista
        items={[
          {
            imgUrl: Img_Shield,
            imgDescription: "Cómpralo de manera fácil y rápida",
          },
          {
            imgUrl: Img_MobilePhone,
            imgDescription: "Coriza y compra tu seguro 100% digital",
          },
          {
            imgUrl: Img_Shield,
            imgDescription: "Hasta S/.12 millones de convertura anual",
          },
          {
            imgUrl: Img_MobilePhone,
            imgDescription: "Mas de 300 clínicas en todoel Perú",
          },
        ]}
      />
      <div className="flex-grow-1"></div>
      <p className="text-two">© 2021 ;y Company</p>
    </div>
  );
  const seccion1 = (
    <TituloSuperior
      bigTextGray="Obtén tu"
      bigTextBlue="seguro ahora"
      smallTextGray="Ingresa los datos para comenzar"
    />
  );
  const seccion2 = (
    <React.Fragment>
      <InputControl
        className="mb-2"
        label="Nro. de documento"
        inputType="select"
        selectOptions={[
          { value: "1", text: "DNI" },
          { value: "2", text: "CARNET" },
        ]}
        onChange={(event) => {
          setInfo({ ...info, numeroDocumento: event.currentTarget.value });
        }}
      />
      <InputControl
        className="mb-2"
        label="Fecha Nacimiento"
        inputType="date"
        onChange={(event) => {
          setInfo({ ...info, fechaNacimiento: event.currentTarget.value });
        }}
      />
      <InputControl
        className="mb-2"
        label="Celular"
        inputType="text"
        onChange={(event) => {
          setInfo({ ...info, celular: event.currentTarget.value });
        }}
      />
    </React.Fragment>
  );

  const seccion3 = (
    <React.Fragment>
      <div className="d-flex flex-column">
        <CheckBoxAceptoLa
          className="my-2"
          text="Politica de Protección de Datos Personales y los Términos y Condiciones"
          onChange={() => {}}
        />
        <CheckBoxAceptoLa
          className="my-2"
          text="Politica de Envio de Comunicaciones Comerciales"
          onChange={() => {}}
        />
      </div>
    </React.Fragment>
  );

  async function buttonOnClick() {
    let faltante: string[] = [];
    if (info.numeroDocumento === "") faltante.push("Nro. de documento");

    if (info.fechaNacimiento === "") faltante.push("Fecha Nacimiento");

    if (info.celular === "") faltante.push("Celular");

    if (faltante.length !== 0) {
      dispatch(FrmModalOlvidoIngresarDatos_Action_Show({ texto: faltante }));
    } else {
      dispatch(FrmModalLoading_Action_Show());

      let response = await axios.get("https://randomuser.me/api");

      let obj = response.data.results[0];

      let objPersona: IPersona = {
        NroDeDocumento: info.numeroDocumento,
        Nombres: obj.name.first,
        ApellidoPaterno: obj.name.last,
        ApellidoMaterno: obj.name.last,
        EsMujer: obj.gender === "female",
        FechaNacimiento: info.fechaNacimiento,
      };

      dispatch(Persona_Action_Set(objPersona));

      dispatch(FrmModalLoading_Action_Hide());

      history.push(Form002_Url);
    }
  }

  const seccion4 = (
    <React.Fragment>
      <Button
        color="blue"
        text="COMENCEMOS"
        className="my-5"
        onClick={buttonOnClick}
      />
    </React.Fragment>
  );

  return (
    <MainLayout
      ContenidoBloqueAzul={ContenidoBloqueAzul}
      secciones={[seccion1, seccion2, seccion3, seccion4]}
    ></MainLayout>
  );
};

export default Form001;
export const Form001_Url = UrlGenerator("Form001");
