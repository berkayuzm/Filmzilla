import React, { useEffect } from "react";
import loading from "../img/loading.gif"
const Category = (props) => {
  
 
  useEffect(() => {
    setTimeout(() => {
      props.list()
      console.log("deneme")
    }, 2000);
  }, []);

  return (
    <div className=" mt-3">
      <ul className="list-group ">
        {
          props.categoryList.length>0? 
          props.categoryList.map((category)=>{
            return <li key={category.id} className="list-group-item">{category.name}</li>
          })
          :
          <img src={loading} alt="" />
        }
        
      </ul>
    </div>
  );
};

export default Category;
