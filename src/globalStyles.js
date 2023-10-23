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
    transition: background-color 500ms ease-in;
  }

    .navbar{
      padding:0px;
      background-color:${({theme})=>theme.cardbody}!important;
      transition: background-color 500ms ease-in;
    }
    .dark-mode-text{
        color:${({theme})=>theme.text};
        transition: color 500ms ease-in;
        
    }
   
 
    .card{
      overflow: hidden;
      background:${({theme})=>theme.cardbody};
      transition: background 500ms ease-in;
      
    }
    .card-body{
        color:${({theme})=>theme.text};
        transition: color 500ms ease-in;

    }
    .list-parent{
        background-color:${({theme})=>theme.cardbody};
        color:${({theme})=>theme.text};
        transition: background-color 200ms ease-in;
        cursor:pointer;
        
    }
    .list-parent:hover{
        background-color: ${({theme})=>theme.listbody};
        
    }

 
`;
 

export default GlobalStyle;