import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --green: #1DD05D;
    --red: #e52e4d;
    --black: #000000;
    --white: #FFFFFF;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #121212;
    --shape: #181818;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-widht: 1080px){
      font-size: 93.75%
    }

    @media (max-widht: 720){
      font-size: 87.5%
    }
  }

  body{
    background: var(--background);
    webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .new-transaction-modal{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new-transaction-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    width: 3px;
    height: 3px;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
  
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  
  }

`