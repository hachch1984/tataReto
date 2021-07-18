import React, { useEffect, useRef, useState } from "react";
import { Img_Base, Img_Sombra } from "../../utils/ImgRepository";

interface IProps {
  height: number;
}

const BloqueAzul: React.FC<IProps> = (props) => {
  const objDiv = useRef<HTMLDivElement>(null);

  const [imgSize, setImgSize] = useState({ width: "", height: "", right: "" });

  useEffect(() => {
    let divWidth = objDiv.current?.scrollWidth! * 0.39;

    setImgSize({
      width: divWidth + "px",
      height: divWidth * 0.38 + "px",
      right: "-" + divWidth * (props.children === undefined ? 0.23 : 0.5) + "px",
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: props.height + "px",
      }}
      ref={objDiv}
    >
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "5%",
          width: "80%",
          height: "90%",
        }}
      >
        {props.children}
      </div>

      <div className="d-flex ">
        <div
          className="flex-grow-1 background-color-blue"
          style={{ height: "inherit" }}
        ></div>
        <img style={{ height: props.height + "px" }} src={Img_Base} />
      </div>

      <img
        style={{
          position: "absolute",
          right: imgSize.right,
          bottom: "30%",
          width: imgSize.width,
          height: imgSize.height,
        }}
        className="d-none d-lg-block"
        src={Img_Sombra}
      />
    </div>
  );
};

export default BloqueAzul;
