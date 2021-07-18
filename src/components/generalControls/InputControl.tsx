import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

interface IProps {
  label: string;
  className?: string;
  inputType: "text" | "date" | "select";
  selectOptions?: { value: string; text: string }[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export const InputControl: React.FC<IProps> = (props) => {
  const objP = useRef<HTMLParagraphElement>(null);
   
  const objDivSelect = useRef<HTMLDivElement>(null);

  const objDiv = useRef<HTMLDivElement>(null);

  const objInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      objInput.current?.value === undefined ||
      objInput.current?.value.trim() === ""
    ) {
      inactive();
    } else {
      active();
    }
  }, []);

  function active() {
    objDiv.current?.classList.remove("inputControl_inactive");
    objDiv.current?.classList.add("inputControl_active");

    objInput.current?.focus();
  }

  function inactive() {
    if (
      objInput.current?.value === undefined ||
      objInput.current?.value.trim() === ""
    ) {
      objDiv.current?.classList.add("inputControl_inactive");
      objDiv.current?.classList.remove("inputControl_active");
    }
  }

  const cssSelect: React.CSSProperties = {
    borderLeftWidth: "1px",
  };

  return (
    <div
      className={
        props.className +
        " d-flex flex-row justify-content-between  align-items-center  border-color-gray border-width-1px  border-radius-5px  "
      }
      onMouseEnter={active}
      onMouseLeave={inactive}
    >
      {props.inputType === "select" && (
        <div className="px-3" ref={objDivSelect}>
          <select style={cssSelect}>
            {props.selectOptions?.map((obj, index) => (
              <option key={index} value={obj.value}>
                {obj.text}
              </option>
            ))}{" "}
          </select>
        </div>
      )}
      <div
        ref={objDiv}
        className={
          "d-flex flex-row justify-content-between align-items-center flex-grow-1 inputControl_inactive border-color-gray " +
          (props.inputType === "select" ? "border-left-width-1px" : "")
        }
      >
        <div className="w-100 px-3 ">
          <p ref={objP}> {props.label}</p>
          <input
            className="w-100"
            ref={objInput}
            type={props.inputType}
            onFocus={active}
            onBlur={inactive}
            onChange={(event) => {
              if (props.onChange) {
                props.onChange(event);
              }
            }}
            value={props.value}
          />
        </div>
        {props.inputType === "date" && (
          <div className="px-3 ">
            <FontAwesomeIcon icon={faCalendar} className="color-blue " />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputControl;
