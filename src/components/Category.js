import React, { useEffect } from "react";
import loading from "../img/loading.gif"
const Category = (props) => {
  
 
  useEffect(() => {
    setTimeout(() => {
      props.list()
      
    }, 3000);
  }, []); 
 
  return (
    <div className=" mt-3">
      <ul className="list-group " >
        {
          props.categoryList.length>0? 
          props.categoryList.map((category)=>{
            return <div  key={category.id}  onClick={()=>props.listbyCategory(category)}> <li className="list-group-item list-parent mb-1" >{category.name}</li> </div> 
            
              
            
          })
          :
          <img src={loading} className="category-loading-img" alt="" />
        }
        
      </ul>
    </div>
  );
};

export default Category;
