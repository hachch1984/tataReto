import React from "react";
interface IProps {
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  grupo: string;
  checked?:boolean;
}
const RadioButton: React.FC<IProps> = (props) => {
  return (
    <label
      className={
        "radioButton-one d-flex justify-content-start align-items-start w-100" +
        (props.className ? " " + props.className : "")
      }
    >
      <input type="radio" name={props.grupo} onChange={props.onChange}
      checked={props.checked}
      />
      <p className="m-3 my-0">{props.text}</p>
    </label>
  );
};

export default RadioButton;
