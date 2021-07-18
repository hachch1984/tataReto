import React from "react";

interface IProps {
  items: {
    imgUrl: string;
    imgDescription: string;
  }[];
}

const Lista: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      <ul className="lista">
        {props.items.map((obj, index) => (
          <li key={index}>
            <img alt='#' src={obj.imgUrl} />
            <p>{obj.imgDescription}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Lista;
