import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/generalControls/Button";
import TituloSuperior from "../components/generalControls/TituloSuperior";
import { UrlGenerator } from "../utils/UrlGenerator";
import MainLayout from "./MainLayout";
import { Form001_Url } from "./Form001";

const Form005 = () => {
  const history = useHistory();

   
  

  const seccion1 = (
    <div className="mt-5">
      <TituloSuperior
        bigTextGray="!Pagina"
        bigTextBlue="No Encontrada"
        smallTextGray=":("
      />
    </div>
  );

  const seccion2 = (
    <div className="d-flex justify-content-end">
      <Button
        color="gray"
        text="IR A INICIO"
        onClick={() => {
          history.push(Form001_Url);
        }}
      />
    </div>
  );

  return <MainLayout secciones={[seccion1, seccion2]} />;
};

export default Form005;
export const Form005_Url = UrlGenerator("Form005");
