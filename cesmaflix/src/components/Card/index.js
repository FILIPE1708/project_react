import React from 'react';
import {Button} from "reactstrap";
import {Card} from "reactstrap";

function MyCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.text}
        </Card.Text>
        <Button variant="primary">{props.button}</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;