import React from "react";
import logo from '../img/logo.png'

const Nav = () => {

 function click(e){
    e.preventDefault()
    alert("tıklandı")
}
  return (
    <nav className="navbar navbar-light bg-light" >
      <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="" width="90" height="60" className="d-inline-block align-text-top"/>
       
    </a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
            <button className="btn btn-outline-success" type="submit" onClick={click}>
              Search
            </button>
          </form>
      </div>
    </nav>
  );
};

export default Nav;
