import React from "react";
import FrmModal from "./FormModal";
 


const FrmModalLoading = () => {
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

    return (
        <FrmModal>
            <div style={divCss}>
                <h2 className="global-font-size-h1 text-white">Cargando</h2>
            </div>
        </FrmModal>
    );
};

export default FrmModalLoading;