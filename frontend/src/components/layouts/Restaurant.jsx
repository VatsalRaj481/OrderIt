import React from "react";
import { Link } from "react-router-dom";

export default function Restaurant({ restaurant }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <Link
          to={`/eats/stores/${restaurant._id}/menus`}
          className="btn-btn-block"
        >
          <img
            src={restaurant.images[0].url}
            alt={restaurant.name}
            className="card-img-top mx-auto"
          />
        </Link>
        {/* heading and address */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="rest_address">{restaurant.address}</p>
          {/* reviews and rating  */}
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(restaurant.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span className="no_of_reviews">
              ({restaurant.numOfReviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
