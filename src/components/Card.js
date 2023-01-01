import React from "react";

const link = "https://picsum.photos/id/";
const size = "/500/300";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card w-100">
      <img
        src={link + props.imageId + size}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text">
          <small className="text-muted">{props.updatedTime}</small>
        </p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  cardTitle: "Default Card Title",
};

export default Card;
