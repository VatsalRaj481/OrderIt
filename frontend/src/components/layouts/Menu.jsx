import React, { useEffect } from "react";
import FoodItem from "./FoodItem";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../actions/menuAction";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export default function Menu() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMenus(id));
  }, [dispatch, id]);

  const { menus, loading, error } = useSelector((state) => state.menus);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <FoodItem
                    key={fooditem._id}
                    fooditem={fooditem}
                    restaurant={id}
                  />
                ))}
              </div>
            ) : (
              <Message variant="info">No FoodItem Found</Message>
            )}
          </div>
        ))
      ) : (
        <Message variant="info">No Menus Found</Message>
      )}
    </div>
  );
}
