import styled from "styled-components";

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -10rem;

    div{
      background: var(--shape);
      padding: 1rem;
      border-radius: 0.5rem;
      color: var(--white);
      box-shadow: 0 0 1rem 0 rgba(0,0,0, 0.9);

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        justify-content: space-between;
        line-height: 3rem;
        font-weight: 500;
      }

      img{
        width: 15%;
        height: 15%;
      }
      &.highlight-background{
        background: var(--green);
        color: #fff;
      }
`