import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleFavorites } from "../actions/favoriteActions";

const MovieHeader = (props) => {
  const appTitle = "";
  console.log(props);

  const handlerDisplayFavorites = () => {
    props.toggleFavorites();
  };

  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{props.appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
          <div className="btn btn-sm btn-primary">
            <span onClick={handlerDisplayFavorites}>
              {props.displayFavorites ? "Hide" : "Show"} Favorites
            </span>
          </div>
          <Link to="/movies" className="btn btn-sm btn-primary">
            View All Movies
          </Link>
          <Link to="/movies/add" className="btn btn-sm btn-success">
            <i className="material-icons">&#xE147;</i>{" "}
            <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appTitle: state.appTitle,
    ...state.favoritesReducer,
  };
};

const mapActionsToProps = {
  toggleFavorites,
};

export default connect(mapStateToProps, mapActionsToProps)(MovieHeader);
