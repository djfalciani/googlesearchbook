import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                        <h1><strong>Google Book Search</strong></h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        Place Saved Books Here
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Saved;