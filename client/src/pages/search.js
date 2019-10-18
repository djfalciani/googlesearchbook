import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";
import BookCard from "../components/BookCard";

class Search extends Component {
  state = {
    books: [],
    searchQuery: "",
    cardMsg: "Search Results from Google"
  };

  getBooks = () => {
    API.getGoogleBooks(this.state.searchQuery)
      .then(res => this.setState({ books: res.data.items}))
      .catch(() => this.setState({ books:[], cardMsg: "No Books Found. Try Again"}));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };
  
  handleSaveBook = id => {
    const book = this.state.books.find(book => book.id === id);
    
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      // author: book.volumeInfo.authors,
      author: book.volumeInfo.authors.join(", "),
      synopsis: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    })
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
          <Col size="md-12">
              <Card title="Book Search" icon="far fa-book">
                  <form>
                      <Input
                        value={this.state.searchQuery}
                        onChange={this.handleInputChange}
                        name="searchQuery"
                        placeholder="Search"
                      />
                      <FormBtn
                        disabled={!(this.state.searchQuery)}
                        onClick={this.handleFormSubmit}
                      >
                        Submit Book
                      </FormBtn>
                  </form>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
              <Card 
                title={this.state.cardMsg}>

                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <BookCard
                        key       = {book.id}
                        id        = {book.id}
                        title     = {book.volumeInfo.title}
                        authors   = {book.volumeInfo.authors.join(", ")}
                        synopsis  = {book.volumeInfo.description}
                        image     = {book.volumeInfo.imageLinks.thumbnail}
                        link      = {book.volumeInfo.infoLink}
                        handleSaveBook={this.handleSaveBook}
                      >
                      </BookCard>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
