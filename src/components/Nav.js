import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

const Nav = (props) => {

 function click(e){
    e.preventDefault()
    alert("tıklandı")
}
  return (
    <nav className="navbar navbar-light bg-light" >
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="" width="90" height="60" className="d-inline-block align-text-top"/>
       
    </Link>
      {
        props.themeMode==="light"?
        <img className="moon" onClick={props.changeMode} src="https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png"/>
        :
        <img className="sun" onClick={props.changeMode} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIidWWS07DMBCGJxWIdgErWonSFeImvQEqx4A78LgH3KEcAEjLY9GC0hvAjhUtSDwW/VjElZIosR07UPFL3iTzzzeeKPaI/DcBd8DNMsAAuPprVRbjDQa2gYZvcmAVaNsGt4FPYAK0NHEhcK153wIi4APYsgHXlQET3ACdqBwRsOZiLNyVxh+aCs/9xkEQvIhIV0SGIvKcKegUeADe1RoDJxnAk/J2VS53AfvAjGLNgJ4XpAA610AXmlcGV+3V7TSrKdA05bU5QA5FZL1ErRsiclAiPl/AY4ndLjQ25a2p5GHGGCZidhzq3U0Unpu7qNXOh7+F3y438T/7O6026MKqwrT6Dp60KP87vQKb3mAF72F/gOxVAs3Ap4ad+kNVi4fAWeJZEzgGRsCbWiPgKNle4BwYUPZKJX0tXjoUfaW89vc50EhAqxoEzGMU8bz1rQy60eceuDXAI+CLEnNXB6gbYgD9eEs8RnWsoLayAeu0tLl6xcM7EP/L5O/1AzM0BnlHGDx/AAAAAElFTkSuQmCC"/>
      }
      <img className="menu-button" src="https://img.icons8.com/ios-filled/30/null/menu-rounded.png"/>
    
          <form className="d-flex" onSubmit={props.search}>
            <input className="form-control me-2" name="key" type="search" placeholder="Search" aria-label="Search"/> 
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
      </div>
    </nav>
  );
};

export default Nav;
