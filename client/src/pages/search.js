import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";

class Search extends Component {
  state = {
    books: [],
    searchQuery: ""
  };

//   componentDidMount() {
//     // this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
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
          <Col size="md-12">
              <Card title="Search Results from Google">

              </Card>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
