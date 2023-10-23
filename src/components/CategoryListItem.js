import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const CategoryListItem = (props) => {


  return (
      <Link to={"/"} key={props.category.id} className="category-link">
    <div onClick={() => {props.listbyCategory(props.category);}}>
        <li  className="list-group-item list-parent mb-1">
          {props.category.name}
        </li>
    </div>
      </Link>
  );
};

export default CategoryListItem;
