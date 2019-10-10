import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h1>
          <strong>
            <i className={`fa fa-${props.icon}`} aria-hidden="true" />{props.title}
          </strong>
        </h1>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
