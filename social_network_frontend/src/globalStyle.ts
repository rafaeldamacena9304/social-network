import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Poppins", sans-serif;
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color:black;
    }
    .mainTitle{
        font-size:48px;
        margin:24px 0;
        color:#fff;
        text-align:center;
        font-weight:bold;
        text-decoration:none;
        display:block;
    }
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:0 auto;
        width:100%;
        max-width:960px;
    }
`;
