import React from "react";
interface IProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
const CheckBoxAceptoLa: React.FC<IProps> = (props) => {
  return (
    <label
      className={
        "checkbox-aceptoLa d-flex justify-content-start align-items-start w-100" +
        (props.className ? " " + props.className : "")
      }
    >
      <input type="checkbox" onChange={props.onChange} />
      <p className="m-3 my-0">
        Acepto la<span>{props.text}</span>
      </p>
    </label>
  );
};

export default CheckBoxAceptoLa;
