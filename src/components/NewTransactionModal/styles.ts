import styled from 'styled-components';
import {darken, transparentize} from 'polished'


export const Conteiner = styled.form`
  h2{
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  input{
    width: 100%;
    color: var(--white);
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--green);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--white);
    }

    & + input{
      margin-top: 1rem;
    }
  }


  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--white);
    color: var(--black);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }

  }
`

export const TransactionTypeConteiner = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
};


export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: 
    ${(props) => props.isActive 
    ? transparentize(0.9,colors[props.activeColor]) 
    : 'transparent'};
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      border-color: ${darken(0.01, '#d7d7d7')};
    }

    img{
      height: 20px;
      width: 20px;
    }

    span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)
    }
`