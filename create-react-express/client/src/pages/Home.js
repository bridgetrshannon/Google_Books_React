import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for a book",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No results, search again",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Google Books Search</h1>
              <h2>Search for and Save Books</h2>
            </Jumbotron>
          </Col>
          <Col>
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>{this.state.books.length}</Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
