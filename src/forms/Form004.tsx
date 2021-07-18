import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/generalControls/Button";
import TituloSuperior from "../components/generalControls/TituloSuperior";
import { UrlGenerator } from "../utils/UrlGenerator";
import MainLayout from "./MainLayout";
import { Form001_Url } from "./Form001";

const Form004 = () => {
  const history = useHistory();

  const css: React.CSSProperties = {
    fontSize: "16px",
  };

  const css2: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bolder",
    color: "gray",
  };

  const seccion1 = (
    <div className="mt-5">
      <TituloSuperior
        bigTextGray="!Gracias por"
        bigTextBlue="confiar en nosotros!"
        smallTextGrayJsxElement={
          <span style={css}>
            Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
            <span style={css2}>se pondrá en contacto </span>contigo en las
            siquientes <span style={css2}>48 horas</span>
          </span>
        }
      />
    </div>
  );

  const seccion2 = (
    <div className="d-flex justify-content-end">
      <Button
        color="gray"
        text="IR A SALUDO"
        onClick={() => {
          history.push(Form001_Url);
        }}
      />
    </div>
  );

  return <MainLayout secciones={[seccion1, seccion2]} />;
};

export default Form004;
export const Form004_Url  = UrlGenerator("Form004");
