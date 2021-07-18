import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/generalControls/Button";
import TituloSuperior from "../components/generalControls/TituloSuperior";
import {
  Img_correct,
  Img_Ilustration1,
  Img_Ilustration2,
  Img_Ilustration3,
  Img_Ilustration4
} from "../utils/ImgRepository";
import { UrlGenerator } from "../utils/UrlGenerator";
import MainLayout from "./MainLayout";
import { Form004_Url } from "./Form004";
const Form003 = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const history = useHistory();
  const Box = (title: string, money: string, selectedTitle: string) => {
    return (
      <div
        className={"box " + (selectedTitle === title ? "box-green" : "")}
        onClick={() => {
          setSelectedTitle(title);
        }}
      >
        <div>
          <img src={selectedTitle === title ? Img_correct : ""}></img>
        </div>
        <span>{title}</span>
        <p>
          <span>S/.</span>
          {money}
        </p>
        <span>mensual</span>
      </div>
    );
  };

  const Description = () => {
    function CoberturaMoney() {
      switch (selectedTitle) {
        case "Basico":
          return "S/1MM";
        case "Avanzado":
          return "S/2MM";
        case "Premiun":
          return "S/3MM";
        case "Full":
          return "S/4MM";
        default:
          return "";
      }
    }

    function Imagen() {
      switch (selectedTitle) {
        case "Basico":
          return Img_Ilustration1;
        case "Avanzado":
          return Img_Ilustration2;
        case "Premiun":
          return Img_Ilustration3;
        case "Full":
          return Img_Ilustration4;
        default:
          return "";
      }
    }
    function Detalle() {
      let value = 0;
      switch (selectedTitle) {
        case "Basico":
          value = 1;
          break;
        case "Avanzado":
          value = 2;
          break;
        case "Premiun":
          value = 3;
          break;
        case "Full":
          value = 4;
          break;
      }

      let css: React.CSSProperties = {
        fontSize: "20px",
        fontWeight: "bolder",
      };

      return (
        <ul>
          <li>
            <FontAwesomeIcon icon={faHeart} className="color-blue " />
            <span style={css}>Lima </span>
            <span>(zona de cobertura)</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="color-blue " />
            <span style={css}>+30 clínicas </span>
            <span>(zona de cobertura)</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="color-blue " />
            <span className={value >= 1 ? "" : "texto-tachado"}>
              Medico a domicilio
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="color-blue " />
            <span className={value >= 2 ? "" : "texto-tachado"}>
              Chequeos preventivos
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="color-blue " />
            <span className={value >= 3 ? "" : "texto-tachado"}>
              Reenbolso nacional
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="color-blue " />
            <span className={value >= 4 ? "" : "texto-tachado"}>
              Reenvolso internacional
            </span>
          </li>
        </ul>
      );
    }

    return (
      <div className="description">
        <p className="description-titulo">Cuentas con estos beneficios</p>
        <div className="description-imagenDescription">
          {selectedTitle !== "" && (
            <React.Fragment>
              <div className="description-imagenDescription-descripcion">
                <p> {selectedTitle !== "" ? "Cobertura maxima" : ""}</p>
                <p>{CoberturaMoney()}</p>
                <p> {selectedTitle}</p>
              </div>
              <div className="description-imagenDescription-separador-vertical"></div>
              <img
                className="description-imagenDescription-imagen"
                src={Imagen()}
              ></img>
            </React.Fragment>
          )}
        </div>
        <div className="description-detalleCobertura">{Detalle()}</div>
      </div>
    );
  };

  const seccion1 = (
    <TituloSuperior
      bigTextGray="Elige"
      bigTextBlue="tu protección"
      smallTextGray="Selecciona tu plan de salud"
    />
  );

  const seccion2 = (
    <div className="d-flex  justify-content-between  flex-row">
      {Box("Basico", "160", selectedTitle)}

      {Box("Avanzado", "200", selectedTitle)}

      {Box("Premiun", "250", selectedTitle)}

      {Box("Full", "500", selectedTitle)}
    </div>
  );

  const seccion3 = <React.Fragment>{Description()}</React.Fragment>;

  

  const seccion4 = (
    <div className="my-5 d-flex justify-content-end">
      <Button
        color="blue"
        text="COMPRAR PLAN"
        onClick={() => {
          history.push(Form004_Url);
        }}
      />
    </div>
  );
  return <MainLayout secciones={[seccion1, seccion2, seccion3, seccion4]} />;
};

export default Form003;
export const Form003_Url  = UrlGenerator("Form003");
