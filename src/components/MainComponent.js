import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Navigate, Route, Routes } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/menu"
            element={
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            }
          ></Route>
          <Route
            path="/"
            element={<Navigate to="/home" replace={true} />}
          ></Route>
        </Routes>
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
