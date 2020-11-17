import React from "react";
import { ListItem, Row, Col } from "react-bootstrap";

function Book({
  title,
  subtitle,
  authors,
  link,
  description,
  image,
  googleId,
}) {
  return (
    <div>
      <ListItem>
        <Row>
          <Col>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
          </Col>
          <Col>
            <a href={link}></a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Written by {authors}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={image} alt={title} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
      </ListItem>
    </div>
  );
}

export default Book;
