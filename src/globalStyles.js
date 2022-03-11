import { createGlobalStyle } from 'styled-components';
export const lightTheme={
    body:'#fff',
    text:'#121212'
}
export const darkTheme={
    body:'#121212',
    text:'#fff',
    cardbody:'#2D2D2D',
    listbody:'#1F1F1F'
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({theme})=>theme.body};
    transition: background-color 500ms linear;
  }
.card-img{
    height: 200px;
    width: auto;
    }
    #btn-back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: none;
      
    }
    
    #btn-back-to-top i{
      font-size: 3em;
      color: #a2a8d3;
      transition: all 500ms;
    }
    #btn-back-to-top i:hover{
      color: #142d4c;
    }
    .navbar{
      padding:0px;
      background-color:${({theme})=>theme.cardbody}!important;
      transition: background-color 500ms linear;
    }
    .dark-mode-text{
        color:${({theme})=>theme.text};
        transition: color 500ms linear;
        
    }
    .navbar-brand{
      padding:0px
    
    }
    
    .loading-img{
      height: 200px;
      width: auto;
      
    }
    .category-loading-img{
      height: 50px;
      width: 100px;
    }
 
    .card{
      overflow: hidden;
      background:${({theme})=>theme.cardbody};
      transition: background 500ms linear;
      
    }
    .card-body{
        color:${({theme})=>theme.text};
        transition: color 500ms linear;

    }
    .list-parent{
        background-color:${({theme})=>theme.cardbody};
        color:${({theme})=>theme.text};
        transition: background-color 200ms linear;
        cursor:pointer;
        
    }
    .list-parent:hover{
        background-color: ${({theme})=>theme.listbody};
        
    }
    .moon{
        cursor:pointer;
    }
    .sun{
        cursor:pointer;
        
    }
    .card img {
      transition: transform 1.5s ease;
    }
    .card img:hover {
      transform: scale(1.5);
    }
    .inside-card{
      
      border: 0;
    }
    .star-icon{
    
      font-size: 15px;
      color: #ffcab0;
      margin-right: 5px;
    }
  }
 
`;
 

export default GlobalStyle;