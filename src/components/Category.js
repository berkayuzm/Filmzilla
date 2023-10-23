import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import loading from "../img/loading.gif"
import { useRef } from "react";
import CategoryListItem from "./CategoryListItem";
const Category = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.list()
      
    }, 1000);
  }, []); 

  return (
    <div className=" mt-3">
      <ul className="list-group category" >
        {
          props.categoryList.length>0? 
          props.categoryList.map((category)=>{
            return <CategoryListItem category={category} listbyCategory={props.listbyCategory}/>
          })
          :
          <img src={loading} className="category-loading-img" alt="" />
        }
        
      </ul>
    </div>
  );
};

export default Category;
