import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @font-face {
        font-family: Nunito;
        src: url(/src/assets/font/Nunito.ttf);
    }
    *{
        box-sizing: border-box;
        padding:0;
        margin:0;
        font-family: Nunito;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    body{
        overflow-x:clip;
    }
    .root{
        background: url(/src/assets/img/moutain3.jpg) center / cover no-repeat;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .ripple {
        background-position: center;
        transition: background 0.8s;
      }
      .ripple:hover {
        background: #3d41a3 radial-gradient(circle, transparent 1%, #3a3d99 1%) center/15000%;
      }
      .ripple:active {
        background-color: #9498ff;
        background-size: 100%;
        transition: background 0s;
      }

    @media (min-width:1024px){
        .root{
            flex-direction: row;
            justify-content: right;
            flex-wrap:wrap;
        }
    }
`;