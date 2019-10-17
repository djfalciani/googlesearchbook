import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";
import BookCard from "../components/BookCard";

class Search extends Component {
  state = {
    books: [
      // {
      //   id: "asd12323",
      //   Title: "Test",
      //   Author: "Author Test"
      // }
    ],
    searchQuery: "",
    cardMsg: "Search Results from Google"
  };

  // componentDidMount() {
  //   // this.loadBooks();
  // }

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
    
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
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
                        authors   = {book.volumeInfo.authors}
                        synopsis  = {book.volumeInfo.description}
                        image     = {book.volumeInfo.imageLinks.thumbnail}
                        link      = {book.volumeInfo.infoLink}
                      >
                      </BookCard>
                      // <ListItem key={book.id}>
                      //   <Link to={"/books/" + book.id}>
                      //     <strong>
                      //       {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
                      //     </strong>
                      //   </Link>
                      //   <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      // </ListItem>
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
