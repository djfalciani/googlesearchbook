import React from "react";
import { Col, Row } from "../Grid";
// import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <Row>
        <Col size="md-8">
          <h1><strong>{props.title}</strong></h1>
          <p><i>Written by {props.authors.join(", ")}</i></p>
        </Col>
        <div className="col text-right" style={{ marginRight: "10px"}}>
          <a target="_blank" rel="noopener noreferrer" href={props.link} className="btn btn-light">View</a>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => props.handleSaveBook(props.id)}
          >Save</button>
        </div>
      </Row>
      <Row>
        <Col size="md-2">
          <div className="img-container">
            <img alt={props.title} src={props.image} />
          </div>
        </Col>
        <Col size="md-10">
          <div className="content">
            <p>{props.synopsis}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FriendCard;
