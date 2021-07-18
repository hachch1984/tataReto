import React from "react";
interface IProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  color: "blue" | "gray";
}
const Button: React.FC<IProps> = (props) => {
  return (
    <button
      className={"button-one " + (props.className ? " " + props.className : "")}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
