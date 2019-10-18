import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Card from "../components/Card";
import SavedBookCard from "../components/SavedBookCard";


class Saved extends Component {
    state = {
        books: [],
        cardMsg: "Saved Books"
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => this.setState({ books: res.data}))
        .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                        <h1><strong>Google Book Search</strong></h1>
                        <p className="lead">Search for and Save Books of Interest</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Card title="Saved Books" icon="book">
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <SavedBookCard
                                        key         = {book._id}
                                        id          = {book._id}
                                        title       = {book.title}
                                        authors     = {book.author}
                                        synopsis    = {book.synopsis}
                                        image       = {book.image}
                                        link        = {book.link}
                                        googleId    = {book.googleId}
                                        deleteBook  = {this.deleteBook}
                                    >
                                    </SavedBookCard>
                                ))}
                            </List>
                        ) : (<h3>No Saved Books!</h3>)}
                    </Card>
                </Row>
            </Container>

        );
    }
}

export default Saved;