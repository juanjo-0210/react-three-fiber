import { createGlobalStyle } from "styled-components";


export const Globalstyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    html,
    body,
    #root{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    body{
        position: fixed;
    }
`