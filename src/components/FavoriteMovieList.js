import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remFavorite } from "../actions/favoriteActions";

const FavoriteMovieList = (props) => {
  //   const favorites = [];

  const handlerRemove = (value) => {
    console.log(props.favorites);
    props.remFavorite(value);
    console.log(props.favorites);
  };
  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {props.favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  onClick={() => handlerRemove(movie)}
                  class="material-icons"
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.favoritesReducer,
  };
};

const mapActionsToProps = {
  remFavorite: remFavorite,
};
export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList);
