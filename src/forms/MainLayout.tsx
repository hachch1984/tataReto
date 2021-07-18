import React from "react";
import { useAppSelector } from "../app/hooks";
import BloqueAzul from "../components/generalControls/BloqueAzul";
import FrmModalLoading from "./Modal/FrmModalLoading";
import { FrmModalLoading_State } from "./Modal/FrmModalLoadingSlice";
import FrmModalOlvidoIngresarDatos from "./Modal/FrmModalOlvidoIngresarDatos";
import { FrmModalOlvidoIngresarDatos_State } from "./Modal/FrmModalOlvidoIngresarDatosSlice";

interface IProps {
  ContenidoBloqueAzul?: JSX.Element;
  secciones: JSX.Element[];
}

const MainLayout: React.FC<IProps> = (props) => {
  const objFrmModalOlvidoIngresarDatos = useAppSelector(
    FrmModalOlvidoIngresarDatos_State
  );
  const objFrmModalLoading = useAppSelector(
    FrmModalLoading_State
  );

  return (
    <div className="d-flex" style={{ width: "100%", height: "100vh" }}>
      <div className=" container-fluid container-lg   ">
        <div className="row ">
          <div
            className={
              "order-2 order-lg-1  col-12 " +
              (props.ContenidoBloqueAzul ? "col-lg-5" : "col-lg-3") +
              " g-0 "
            }
          >
            <BloqueAzul height={600}>{props.ContenidoBloqueAzul}</BloqueAzul>
          </div>

          <div
            className={
              "order-1 order-lg-2  col-12 " +
              (props.ContenidoBloqueAzul ? "col-lg-6" : "col-lg-8") +
              "  offset-0 offset-lg-1"
            }
          >
            <div className="container mt-5">
              {props.secciones.map((obj, index) => (
                <div key={index} className="row">
                  <div className="col-12  col-lg-8">{obj}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {objFrmModalOlvidoIngresarDatos.show && <FrmModalOlvidoIngresarDatos />}
      {objFrmModalLoading.show && <FrmModalLoading />}
    </div>
  );
};

export default MainLayout;
