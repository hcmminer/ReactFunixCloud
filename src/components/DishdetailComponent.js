import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

// Adding DishDetail component
const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments }) => {
  if (comments == null) {
    return <div></div>;
  }
  const showComments = comments.map((cmnt) => {
    return (
      <div key={cmnt.id}>
        <p>{cmnt.comment}</p>
        <p>
          --{cmnt.author}, {""}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(cmnt.date)))}
        </p>
      </div>
    );
  });

  return (
    <div className="col-12 col-md-5 m-1">
      <h3>Comments</h3>
      {showComments}
    </div>
  );
};

const DishDetail = (props) => {
  const dish = props.dish;
  if (dish == null) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
