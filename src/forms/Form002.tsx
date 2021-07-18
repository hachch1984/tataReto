import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Button from "../components/generalControls/Button";
import InputControl from "../components/generalControls/InputControl";
import RadioButton from "../components/generalControls/RadioButton";
import TituloSuperior from "../components/generalControls/TituloSuperior";
import { Persona_State } from "../IEntities/IPersonaSlice";
import { UrlGenerator } from "../utils/UrlGenerator";
import { Form003_Url } from "./Form003";
import MainLayout from "./MainLayout";

const Form002 = () => {
  const history = useHistory();
  const personaState = useAppSelector(Persona_State);
  const [info, setInfo] = useState({
    objPersona: personaState.objIPersona,
    aQuienSeAsegura: 0,
  });

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
        value={info.objPersona.NroDeDocumento}
      />
      <InputControl
        className="mb-2"
        label="Nombres"
        inputType="text"
        value={info.objPersona.Nombres}
      />
      <InputControl
        className="mb-2"
        label="Apellido Paterno"
        inputType="text"
        value={info.objPersona.ApellidoPaterno}
      />
      <InputControl
        className="mb-2"
        label="Apellido Materno"
        inputType="text"
        value={info.objPersona.ApellidoMaterno}
      />
      <InputControl
        className="mb-2"
        label="Fecha Nacimiento"
        inputType="date"
        value={info.objPersona.FechaNacimiento}
      />
    </React.Fragment>
  );

  const seccion3 = (
    <React.Fragment>
      <p className="label-one">Genero</p>
      <RadioButton
        grupo="sexo"
        text="Masculino"
        className="my-3"
        onChange={() => {}}
        checked={info.objPersona.EsMujer == false}
      />
      <RadioButton
        grupo="sexo"
        text="Femenino"
        className="my-3"
        onChange={() => {}}
        checked={info.objPersona.EsMujer}
      />
    </React.Fragment>
  );

  const seccion4 = (
    <React.Fragment>
      <p className="label-one">¿A quien vamos a asegurar?</p>

      <RadioButton
        grupo="aquien"
        text="Solo a mi"
        className="my-3"
        onChange={() => {}}
        checked={info.aQuienSeAsegura === 1}
      />
      <RadioButton
        grupo="aquien"
        text="A mi y a mi familia"
        className="my-3"
        onChange={() => {}}
        checked={info.aQuienSeAsegura === 2}
      />
    </React.Fragment>
  );

  const seccion5 = (
    <div className="d-flex justify-content-end">
      <Button
        color="gray"
        text="CONTINUAR"
        onClick={() => {
          history.push(Form003_Url);
        }}
      />
    </div>
  );

  return (
    <MainLayout
      secciones={[seccion1, seccion2, seccion3, seccion4, seccion5]}
    />
  );
};

export default Form002;
export const Form002_Url = UrlGenerator("Form002");
