import React from "react";
interface IProps {
  bigTextGray: string;
  bigTextBlue: string;
  smallTextGray?: string;
  smallTextGrayJsxElement?: JSX.Element;
}
const TituloSuperior: React.FC<IProps> = (props) => {
  return (
    <div className="titulo-superior">
      <span>{props.bigTextGray}</span>
      &nbsp;
      <span>{props.bigTextBlue}</span>
      <p>
        {props.smallTextGrayJsxElement
          ? props.smallTextGrayJsxElement
          : props.smallTextGray}
      </p>
    </div>
  );
};

export default TituloSuperior;
